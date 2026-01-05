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

  const [profileImageFile, setProfileImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(noneUserImg);
  const fileInputRef = useRef(null);
  
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [emailCode, setEmailCode] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isRegisterAble, setIsRegisterAble] = useState(false);

  const navigator = useNavigate();

  // 비밀번호 확인 로직
  useEffect(() => {
    setIsPasswordAble(password !== "" && password === passwordCheck);
  }, [password, passwordCheck]);

  // 회원가입 버튼 활성화 조건 (모든 필드 검증)
  useEffect(() => {
    const isAllFilled = id && password && isPasswordAble && nickName && 
                        phoneNum && zipCode && addr && addrDetail && isEmailVerified;
    setIsRegisterAble(isAllFilled);
  }, [id, password, isPasswordAble, nickName, phoneNum, zipCode, addr, addrDetail, isEmailVerified]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // ✅ 이메일 인증번호 발송 (중복 체크 포함)
  const handleSendEmail = async () => {
    if (!id) return alert("이메일을 입력해주세요.");
    try {
      await axios.post("https://api.stackflov.com/auth/email/send", { email: id });
      alert("인증번호가 발송되었습니다.");
      setIsEmailSent(true);
    } catch (error) {
      // 서버에서 내려주는 구체적인 에러 메시지 활용
      const msg = error.response?.data?.message || "이미 존재하는 계정이거나 발송에 실패했습니다.";
      alert(msg);
    }
  };

  // ✅ 이메일 인증번호 확인
  const handleVerifyCode = async () => {
    try {
      await axios.post("https://api.stackflov.com/auth/email/verify", { email: id, code: emailCode });
      alert("이메일 인증이 완료되었습니다.");
      setIsEmailVerified(true);
    } catch (error) {
      alert("인증번호가 틀렸습니다. 다시 확인해주세요.");
    }
  };

  const handleRegister = async () => {
    if (!isRegisterAble) return;

    try {
      let profileUrl = null;
      // 1. S3 이미지 업로드
      if (profileImageFile) {
        const formData = new FormData();
        formData.append("image", profileImageFile);
        const uploadRes = await axios.post("https://api.stackflov.com/s3/upload", formData);
        profileUrl = uploadRes.data.url;
      }

      // 2. 회원가입 요청 데이터 (zipCode 추가 및 구조 개선)
      const body = {
        email: id,
        password: password,
        nickname: nickName,
        profileImage: profileUrl,
        zipCode: zipCode, // 누락되었던 필드 추가
        address: addr,
        addressDetail: addrDetail,
        phoneNumber: phoneNum,
        socialType: "NONE",
        socialId: "",
        level: 0,
        role: "USER",
      };

      await axios.post("https://api.stackflov.com/auth/register", body);
      alert("StackFlov의 회원이 되신 것을 축하드립니다!");
      navigator("/login");
    } catch (error) {
      console.error("Register Error:", error);
      // 서버 응답에 따른 에러 메시지 분기
      if (error.response) {
        alert(`가입 실패: ${error.response.data.message || "입력 정보를 확인해주세요."}`);
      } else {
        alert("네트워크 오류가 발생했습니다.");
      }
    }
  };

  return (
    <RegisterFormWrapper>
      <MainContainer>
        <FormTitleWrapper>
          <FormTitle>Register</FormTitle>
        </FormTitleWrapper>

        <ImgSelectorWrapper onClick={() => fileInputRef.current.click()}>
          <ImgSelector src={imagePreview} />
          <ImgInstruction>이미지 클릭하여 변경</ImgInstruction>
          <input 
            type="file" 
            accept="image/*" 
            hidden 
            ref={fileInputRef} 
            onChange={handleImageChange} 
          />
        </ImgSelectorWrapper>

        <InpuItemsWrapper>
          <InputItem>
            <InputLabel width={100}>아이디(이메일)</InputLabel>
            <InputValue
              width={160}
              placeholder="example@test.com"
              onChange={(e) => setId(e.target.value)}
            />
            <IdCheckButton
              backgroundColor={isEmailSent ? "gray" : "black"}
              onClick={handleSendEmail}
              disabled={isEmailSent}
            >
              {isEmailSent ? "발송 완료" : "인증 발송"}
            </IdCheckButton>
          </InputItem>

          {isEmailSent && (
            <InputItem>
              <InputLabel width={100}>인증번호</InputLabel>
              <InputValue
                width={160}
                placeholder="인증번호 입력"
                onChange={(e) => setEmailCode(e.target.value)}
              />
              <IdCheckButton
                backgroundColor={isEmailVerified ? "gray" : "blue"}
                onClick={handleVerifyCode}
                disabled={isEmailVerified}
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
            <InputValue width={250} onChange={(e) => setZipCode(e.target.value)} />
          </InputItem>

          <InputItem>
            <InputLabel width={100}>주소</InputLabel>
            <InputValue width={250} onChange={(e) => setAddr(e.target.value)} />
          </InputItem>

          <InputItem>
            <InputLabel width={100}>상세주소</InputLabel>
            <InputValue width={250} onChange={(e) => setAddrDetail(e.target.value)} />
          </InputItem>
        </InpuItemsWrapper>

        <FormButtonWrapper>
          <RegisterButton
            disabled={!isRegisterAble}
            onClick={handleRegister}
            style={{ backgroundColor: isRegisterAble ? "#007bff" : "#ccc" }}
          >
            회원가입
          </RegisterButton>
        </FormButtonWrapper>
      </MainContainer>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;