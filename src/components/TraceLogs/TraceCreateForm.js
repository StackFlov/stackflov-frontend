import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../styles/components/Button";
import { FilePicker } from "../../styles/components/FilePicker";
import {
  TraceCategoryDiv,
  TraceCategoryTitle,
  TraceCreateTopContent,
  TraceCreateWrapper,
  TraceTitleDiv,
  TraceTitleInputDiv,
  TraceCategorySelectorItem,
  TraceCreateBottomContent,
  TraceCreateMiddleContent,
  TraceCreateContentInput,
  TraceCreateCancleBtn,
  TraceCreateBtn,
} from "../../styles/components/TraceCreateFormStyled";
import Cookies from "js-cookie";
import axios from "axios";

const TraceCreateForm = () => {
  // ✅ 백엔드 매핑: 0=자취,1=번개,2=꿀팁,3=레시피 (기존 1~4 → 0~3으로 수정)
  const [selectCategory, setSelectCategory] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 이미지 상태
  const [files, setFiles] = useState([]);         // File[] (전송용)
  const [previews, setPreviews] = useState([]);   // 미리보기 URL 배열

  const navigator = useNavigate();
  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요한 기능입니다.");
      navigator("/login");
    }
  }, [accessToken, navigator]);

  // 이미지 선택
  const handleSelectImages = (e) => {
    const picked = Array.from(e.target.files || []);
    if (!picked.length) return;

    // (선택) 개수/용량 제한
    const MAX_FILES = 10;
    const MAX_MB = 10;
    const filtered = [];
    for (const f of picked) {
      const tooBig = f.size / 1024 / 1024 > MAX_MB;
      if (tooBig) {
        alert(`이미지 ${f.name} 용량이 ${MAX_MB}MB를 초과합니다.`);
        continue;
      }
      filtered.push(f);
    }

    // 기존 것과 합치기, 중복파일 제거(이름+크기 기준)
    const merged = [...files, ...filtered].slice(0, MAX_FILES);
    const dedup = [];
    const sig = new Set();
    for (const f of merged) {
      const key = `${f.name}-${f.size}`;
      if (!sig.has(key)) {
        sig.add(key);
        dedup.push(f);
      }
    }

    setFiles(dedup);
  };

  // 미리보기 생성/정리
  useEffect(() => {
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    return () => urls.forEach((u) => URL.revokeObjectURL(u));
  }, [files]);

  // 개별 삭제
  const removeImage = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  // 등록 (multipart/form-data)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해 주세요.");
      return;
    }

    const formData = new FormData();

    // ✅ 서버가 기대하는 "data" JSON 파트
    const dto = {
      title: title.trim(),
      content: content.trim(),
      category: Number(selectCategory), // 0~3
    };
    formData.append(
      "data",
      new Blob([JSON.stringify(dto)], { type: "application/json" })
    );

    // ✅ 파일 파트 (없으면 아예 생략: @RequestPart(required = false))
    for (const f of files) {
      formData.append("images", f);
    }

    try {
      const res = await axios.post(
        "https://api.stackflov.com/boards/multipart",
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Content-Type 지정 X (브라우저가 boundary 포함해 자동 설정)
          },
          withCredentials: true,
        }
      );

      // Location 헤더로 상세로 이동 시도 → 없으면 목록으로
      const loc = res.headers?.location || res.headers?.Location;
      if (loc) navigator(loc);
      else navigator("/");
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.response?.data ||
        error.message;
      console.error("게시글 작성 실패:", error.response?.status, msg);

      // 금지어 메시지 처리
      if (
        typeof msg === "string" &&
        msg.includes("금지된 단어")
      ) {
        alert(msg);
      } else {
        alert("게시글 작성에 실패했습니다.");
      }
    }
  };

  return (
    <TraceCreateWrapper>
      <TraceCreateTopContent>
        <TraceTitleDiv>제목</TraceTitleDiv>
        <TraceTitleInputDiv
          placeholder="글 제목을 작성해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </TraceCreateTopContent>

      <TraceCategoryDiv>
        <TraceCategoryTitle>카테고리</TraceCategoryTitle>

        <TraceCategorySelectorItem
          selectCategory={selectCategory === 0}
          onClick={() => setSelectCategory(0)}
        >
          🏠 자취
        </TraceCategorySelectorItem>

        <TraceCategorySelectorItem
          selectCategory={selectCategory === 1}
          onClick={() => setSelectCategory(1)}
        >
          ⚡ 번개
        </TraceCategorySelectorItem>

        <TraceCategorySelectorItem
          selectCategory={selectCategory === 2}
          onClick={() => setSelectCategory(2)}
        >
          🍯️ 꿀팁
        </TraceCategorySelectorItem>

        <TraceCategorySelectorItem
          selectCategory={selectCategory === 3}
          onClick={() => setSelectCategory(3)}
        >
          🍙 레시피
        </TraceCategorySelectorItem>
      </TraceCategoryDiv>

      <TraceCreateMiddleContent>
        <TraceCreateContentInput
          placeholder="글 내용을 작성해주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
      <FilePicker>
        📎 파일 선택
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleSelectImages}
        />
      </FilePicker>

      {/* 선택된 수 요약 */}
      {files.length > 0 && (
        <span style={{ color: "#6B7280", fontSize: 14 }}>
          {files.length}개 선택됨
        </span>
      )}
    </div>

    {/* 미리보기 썸네일 */}
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
      {previews.map((src, idx) => (
        <div key={idx} style={{
          position: "relative", width: 96, height: 96,
          borderRadius: 12, overflow: "hidden", border: "1px solid #E5E7EB",
          boxShadow: "0 8px 18px rgba(0,0,0,.06)"
        }}>
          <img src={src} alt={`preview-${idx}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <button
            type="button"
            onClick={() => removeImage(idx)}
            style={{
              position: "absolute", top: 6, right: 6,
              background: "rgba(17,24,39,.7)", color: "#fff",
              border: 0, borderRadius: 8, fontSize: 12, padding: "4px 6px", cursor: "pointer"
            }}
          >
            제거
          </button>
        </div>
      ))}
    </div>
      </TraceCreateMiddleContent>

      <TraceCreateBottomContent>
        <TraceCreateCancleBtn onClick={handleSubmit}>
          😽 등록
        </TraceCreateCancleBtn>

        <TraceCreateBtn onClick={() => navigator("/")}>
          😽 취소
        </TraceCreateBtn>
      </TraceCreateBottomContent>
    </TraceCreateWrapper>
  );
};

export default TraceCreateForm;
