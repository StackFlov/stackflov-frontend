import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  RegisterWrapper,
  RegisterCard,
  FormHeader,
  ProfileUploadSection,
  InputGroup,
  Label,
  StyledInput,
  ActionButton,
  TermsContainer,
  CheckboxWrapper,
  SubmitButton,
  TimerText,
  FadeInSection,
} from "../../styles/components/RegisterFormStyled";
import noneUserImg from "../../assets/none_images.png";

const TERMS_CONTENT = `
제 1 조 (목적)
본 약관은 StackFlov(이하 "서비스")가 제공하는 1인 가구 지역 사회 커뮤니티 서비스의 이용조건 및 절차를 규정함을 목적으로 합니다.

제 2 조 (회원의 의무)
1. 회원은 가입 시 정확한 정보를 기재해야 하며, 타인의 정보를 도용할 수 없습니다.
2. 회원은 공동체 의식을 가지고 이웃 간의 예의를 지키며 서비스를 이용해야 합니다.

제 3 조 (개인정보 보호)
서비스는 수집된 우편번호 및 주소 정보를 지역 기반 서비스 제공 이외의 용도로 사용하지 않으며, 관련 법령에 따라 안전하게 보호합니다.

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
  const [isAgreed, setIsAgreed] = useState(false);

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

  // 비밀번호 일치 및 회원가입 버튼 활성화 로직
  useEffect(() => {
    setIsPasswordAble(password !== "" && password === passwordCheck);
  }, [password, passwordCheck]);

  useEffect(() => {
    const isAllFilled =
      id &&
      password &&
      isPasswordAble &&
      nickName &&
      phoneNum &&
      zipCode &&
      addr &&
      addrDetail &&
      isEmailVerified &&
      isAgreed;
    setIsRegisterAble(isAllFilled);
  }, [id, password, isPasswordAble, nickName, phoneNum, zipCode, addr, addrDetail, isEmailVerified, isAgreed]);

  // 이메일 전송 핸들러
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
      alert(error.response?.data?.message || "인증번호 발송에 실패했습니다.");
    } finally {
      setIsEmailLoading(false);
    }
  };

  // 이메일 인증 확인 핸들러
  const handleVerifyCode = async () => {
    if (timeLeft === 0) return alert("인증 시간이 만료되었습니다.");
    try {
      await axios.post("https://api.stackflov.com/auth/email/verify", { email: id, code: emailCode });
      alert("이메일 인증에 성공했습니다.");
      setIsEmailVerified(true);
      setIsTimerActive(false);
    } catch (error) {
      alert("인증번호가 일치하지 않습니다.");
    }
  };

  // 이미지 선택 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // 회원가입 실행 핸들러
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
    <RegisterWrapper>
      <RegisterCard>
        <FormHeader>
          <h2>Register</h2>
          <p>StackFlov의 새로운 가족이 되어주세요!</p>
        </FormHeader>

        <ProfileUploadSection onClick={() => fileInputRef.current.click()}>
          <div className="image-container">
            <img src={imagePreview} alt="Profile" />
            <div className="overlay">변경</div>
          </div>
          <input type="file" accept="image/*" hidden ref={fileInputRef} onChange={handleImageChange} />
        </ProfileUploadSection>

        <InputGroup>
          <Label>아이디(이메일)</Label>
          <div className="input-with-button">
            <StyledInput placeholder="example@test.com" onChange={(e) => setId(e.target.value)} />
            <ActionButton
              onClick={handleSendEmail}
              disabled={isEmailLoading || isEmailVerified}
              variant={isEmailSent ? "secondary" : "primary"}
            >
              {isEmailLoading ? "..." : isEmailSent ? "재발송" : "인증 발송"}
            </ActionButton>
          </div>
        </InputGroup>

        {isEmailSent && (
          <FadeInSection>
            <InputGroup>
              <Label>
                인증번호 <TimerText>{isEmailVerified ? "인증됨" : formatTime(timeLeft)}</TimerText>
              </Label>
              <div className="input-with-button">
                <StyledInput placeholder="6자리" onChange={(e) => setEmailCode(e.target.value)} />
                <ActionButton
                  onClick={handleVerifyCode}
                  variant="success"
                  disabled={isEmailVerified || timeLeft === 0}
                >
                  확인
                </ActionButton>
              </div>
            </InputGroup>
          </FadeInSection>
        )}

        <InputGroup>
          <Label>비밀번호</Label>
          <StyledInput type="password" onChange={(e) => setPassword(e.target.value)} />
        </InputGroup>

        <InputGroup>
          <Label>비밀번호 확인</Label>
          <StyledInput type="password" onChange={(e) => setPasswordCheck(e.target.value)} />
        </InputGroup>

        <InputGroup>
          <Label>닉네임</Label>
          <StyledInput onChange={(e) => setNickName(e.target.value)} />
        </InputGroup>

        <InputGroup>
          <Label>전화번호</Label>
          <StyledInput placeholder="010-0000-0000" onChange={(e) => setPhoneNum(e.target.value)} />
        </InputGroup>

        <InputGroup>
          <Label>주소</Label>
          <div className="input-with-button" style={{ marginBottom: "8px" }}>
            <StyledInput value={zipCode} readOnly placeholder="우편번호" />
            <ActionButton
              onClick={() =>
                new window.daum.Postcode({
                  oncomplete: (data) => {
                    setZipCode(data.zonecode);
                    setAddr(data.address);
                  },
                }).open()
              }
              variant="dark"
            >
              주소 검색
            </ActionButton>
          </div>
          <StyledInput value={addr} readOnly placeholder="기본 주소" style={{ marginBottom: "8px" }} />
          <StyledInput placeholder="나머지 주소 입력" onChange={(e) => setAddrDetail(e.target.value)} />
        </InputGroup>

        <TermsContainer>
          <Label>이용약관</Label>
          <div className="terms-box">{TERMS_CONTENT}</div>
          <CheckboxWrapper>
            <input type="checkbox" id="agree" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)} />
            <span>위 약관에 동의합니다 (필수)</span>
          </CheckboxWrapper>
        </TermsContainer>

        <SubmitButton disabled={!isRegisterAble} onClick={handleRegister}>
          회원가입 완료
        </SubmitButton>
      </RegisterCard>
    </RegisterWrapper>
  );
};

export default RegisterForm;