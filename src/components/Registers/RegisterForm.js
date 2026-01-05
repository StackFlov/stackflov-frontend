import React, { useEffect, useState, useRef } from "react";
import {
  FormButtonWrapper,
  FormTitle,
  FormTitleWrapper,
  IdCheckButton,
  ImgSelector,
  ImgSelectorWrapper,
  ImgInstruction,
  InpuItemsWrapper,
  InputItem,
  InputLabel,
  InputValue,
  MainContainer,
  RegisterButton,
  RegisterFormWrapper,
} from "../../styles/components/RegisterFormStyled";
import noneUserImg from "../../assets/none_images.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ✅ 아주 긴 이용약관 예시 텍스트
const TERMS_CONTENT = `
제 1 조 (목적)
본 약관은 StackFlov(이하 "서비스")가 제공하는 지역 사회 커뮤니티 서비스의 이용조건 및 절차, 회원과 서비스 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.

제 2 조 (용어의 정의)
1. "회원"이라 함은 서비스에 접속하여 이 약관에 따라 이용계약을 체결하고 서비스를 이용하는 이용자를 말합니다.
2. "게시물"이라 함은 회원이 서비스를 이용함에 있어 서비스상에 게시한 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다.

제 3 조 (회원가입 절차)
회원이 되고자 하는 자는 서비스가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.

제 4 조 (개인정보 보호 의무)
서비스는 "정보통신망법" 등 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법 및 서비스의 개인정보처리방침이 적용됩니다.

... (이하 생략 - 실제 서비스 운영 시 상세 내용을 추가하세요) ...

본 약관은 2026년 1월 5일부터 시행됩니다.
`;

const RegisterForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isPasswordAble, setIsPasswordAble] = useState(false);
  const [nickName, setNickName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [addr, setAddr] = useState("");
  const [addrDetail, setAddrDetail] = useState("");
  const [isAgreed, setIsAgreed] = useState(false); // ✅ 약관 동의 상태

  const [profileImageFile, setProfileImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(noneUserImg);
  const fileInputRef = useRef(null);
  
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [emailCode, setEmailCode] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isRegisterAble, setIsRegisterAble] = useState(false);

  const [timeLeft, setTimeLeft] = useState(180);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const navigator = useNavigate();

  // ✅ 다음 주소 검색 팝업
  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        setZipCode(data.zonecode);
        setAddr(data.address);
      },
    }).open();
  };

  // 타이머 로직
  useEffect(() => {
    let timer;
    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(timer);
  }, [isTimerActive, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    setIsPasswordAble(password !== "" && password === passwordCheck);
  }, [password, passwordCheck]);

  // ✅ 버튼 활성화 조건 (약관 동의 필수 포함)
  useEffect(() => {
    const isAllFilled = id && password && isPasswordAble && nickName && 
                        phoneNum && zipCode && addr && addrDetail && isEmailVerified && isAgreed;
    setIsRegisterAble(isAllFilled);
  }, [id, password, isPasswordAble, nickName, phoneNum, zipCode, addr, addrDetail, isEmailVerified, isAgreed]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSendEmail = async () => {
    if (!id) return alert("이메일을 입력해주세요.");
    setIsEmailLoading(true);
    try {
      await axios.post("https://api.stackflov.com/auth/email/send", { email: id });
      alert("인증번호가 발송되었습니다.");
      setIsEmailSent(true);
      setTimeLeft(180);
      setIsTimerActive(true);
    } catch (error) {
      alert(error.response?.data?.message || "이미 가입된 이메일이거나 발송 오류입니다.");
    } finally {
      setIsEmailLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (timeLeft === 0) return alert("시간이 만료되었습니다. 다시 시도해주세요.");
    try {
      await axios.post("https://api.stackflov.com/auth/email/verify", { email: id, code: emailCode });
      alert("이메일 인증에 성공했습니다.");
      setIsEmailVerified(true);
      setIsTimerActive(false);
    } catch (error) {
      alert("인증번호가 일치하지 않습니다.");
    }
  };

  const handleRegister = async () => {
    if (!isRegisterAble) return;
    try {
      let profileUrl = null;
      if (profileImageFile) {
        const formData = new FormData();
        formData.append("image", profileImageFile);
        const uploadRes = await axios.post("https://api.stackflov.com/s3/upload", formData);
        profileUrl = uploadRes.data.url;
      }

      const body = {
        email: id,
        password: password,
        nickname: nickName,
        profileImage: profileUrl,
        zipCode: zipCode,
        address: addr,
        addressDetail: addrDetail,
        phoneNumber: phoneNum,
        agreement: isAgreed,
        socialType: "NONE",
        role: "USER",
      };

      await axios.post("https://api.stackflov.com/auth/register", body);
      alert("회원가입이 완료되었습니다!");
      navigator("/login");
    } catch (error) {
      alert(error.response?.data?.message || "가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <RegisterFormWrapper>
      <MainContainer>
        <FormTitleWrapper><FormTitle>Register</FormTitle></FormTitleWrapper>

        <ImgSelectorWrapper onClick={() => fileInputRef.current.click()}>
          <ImgSelector src={imagePreview} />
          <ImgInstruction>이미지 클릭하여 변경</ImgInstruction>
          <input type="file" accept="image/*" hidden ref={fileInputRef} onChange={handleImageChange} />
        </ImgSelectorWrapper>

        <InpuItemsWrapper>
          <InputItem>
            <InputLabel width={100}>아이디(이메일)</InputLabel>
            <InputValue width={160} placeholder="example@test.com" onChange={(e) => setId(e.target.value)} />
            <IdCheckButton
              backgroundColor={isEmailLoading ? "#555" : (isEmailSent ? "gray" : "black")}
              onClick={handleSendEmail}
              disabled={isEmailLoading}
            >
              {isEmailLoading ? "발송 중..." : isEmailSent ? "재발송" : "인증 발송"}
            </IdCheckButton>
          </InputItem>

          {isEmailSent && (
            <InputItem>
              <InputLabel width={100}>인증번호</InputLabel>
              <InputValue width={160} placeholder="6자리" onChange={(e) => setEmailCode(e.target.value)} />
              <div style={{ color: "red", fontSize: "12px", width: "40px" }}>{isEmailVerified ? "" : formatTime(timeLeft)}</div>
              <IdCheckButton
                backgroundColor={isEmailVerified || timeLeft === 0 ? "gray" : "blue"}
                onClick={handleVerifyCode}
                disabled={isEmailVerified || timeLeft === 0}
              >
                {isEmailVerified ? "인증됨" : "확인"}
              </IdCheckButton>
            </InputItem>
          )}

          <InputItem>
            <InputLabel width={100}>비밀번호</InputLabel>
            <InputValue type="password" width={250} onChange={(e) => setPassword(e.target.value)} />
          </InputItem>
          <InputItem>
            <InputLabel width={100}>비밀번호 확인</InputLabel>
            <InputValue type="password" width={250} onChange={(e) => setPasswordCheck(e.target.value)} />
          </InputItem>
          <InputItem>
            <InputLabel width={100}>닉네임</InputLabel>
            <InputValue width={250} onChange={(e) => setNickName(e.target.value)} />
          </InputItem>
          <InputItem>
            <InputLabel width={100}>전화번호</InputLabel>
            <InputValue width={250} placeholder="010-0000-0000" onChange={(e) => setPhoneNum(e.target.value)} />
          </InputItem>

          <InputItem>
            <InputLabel width={100}>우편번호</InputLabel>
            <InputValue width={160} value={zipCode} readOnly />
            <IdCheckButton backgroundColor="black" onClick={handleAddressSearch}>주소 검색</IdCheckButton>
          </InputItem>
          <InputItem>
            <InputLabel width={100}>주소</InputLabel>
            <InputValue width={250} value={addr} readOnly />
          </InputItem>
          <InputItem>
            <InputLabel width={100}>상세주소</InputLabel>
            <InputValue width={250} placeholder="나머지 주소 입력" onChange={(e) => setAddrDetail(e.target.value)} />
          </InputItem>

          {/* ✅ 긴 이용약관 박스 추가 */}
          <div style={{ marginTop: "30px" }}>
            <InputLabel style={{ marginBottom: "10px" }}>이용약관 동의</InputLabel>
            <div style={{
              width: "100%",
              height: "100px",
              border: "1px solid #ccc",
              padding: "10px",
              overflowY: "scroll",
              fontSize: "12px",
              color: "#666",
              backgroundColor: "#f9f9f9",
              whiteSpace: "pre-line",
              borderRadius: "4px"
            }}>
              {TERMS_CONTENT}
            </div>
            <div style={{ 
              marginTop: "10px", 
              display: "flex", 
              justifyContent: "flex-end", 
              alignItems: "center", 
              gap: "8px" 
            }}>
              <span style={{ fontSize: "13px", fontWeight: "bold" }}>위 약관에 동의하시겠습니까?</span>
              <input 
                type="checkbox" 
                id="agree" 
                checked={isAgreed} 
                onChange={(e) => setIsAgreed(e.target.checked)} 
                style={{ width: "18px", height: "18px", cursor: "pointer" }}
              />
            </div>
          </div>
        </InpuItemsWrapper>

        <FormButtonWrapper>
          <RegisterButton
            disabled={!isRegisterAble}
            onClick={handleRegister}
            style={{ 
              backgroundColor: isRegisterAble ? "#007bff" : "#ccc",
              cursor: isRegisterAble ? "pointer" : "not-allowed"
            }}
          >
            회원가입
          </RegisterButton>
        </FormButtonWrapper>
      </MainContainer>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;