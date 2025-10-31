// src/components/auth/LoginForm.jsx
import React, { useState } from "react";
import {
  PageWrap,
  Card,
  TitleRow,
  Title,
  SubTitle,
  Form,
  Field,
  Label,
  Input,
  ErrorText,
  SubmitBtn,
  Divider,
  DividerText,
  SocialRow,
  SocialBtn,
  BottomRow,
  LinkBtn,
} from "../../styles/components/LoginFormStyled";
import googleIcon from "../../assets/google-logo.png";
import naverIcon from "../../assets/NAVER_AI-05.png";
import kakaoIcon from "../../assets/KakaoTalk_logo.svg.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const apiBase = process.env.REACT_APP_API_BASE_URL || "https://api.stackflov.com";

  const handleLogin = async () => {
    setErr("");
    if (!id || !password) {
      setErr("아이디와 비밀번호를 모두 입력하세요.");
      return;
    }
    setLoading(true);
    try {
      const body = { email: id, password };
      const res = await axios.post(`${apiBase}/auth/login`, body, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      const { accessToken, refreshToken } = res.data || {};
      if (accessToken) Cookies.set("accessToken", accessToken);
      if (refreshToken) Cookies.set("refreshToken", refreshToken);

      navigate("/");
    } catch (e) {
      const msg =
        e.response?.data?.message ||
        e.response?.data?.error ||
        "로그인에 실패했습니다. 아이디/비밀번호를 확인해주세요.";
      setErr(msg);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
    }
  };

  return (
    <PageWrap>
      <Card>
        <TitleRow>
          <Title>로그인</Title>
          <SubTitle>Stackflov에 오신 걸 환영해요 👋</SubTitle>
        </TitleRow>

        <Form>
          <Field>
            <Label htmlFor="login-id">아이디 (이메일)</Label>
            <Input
              id="login-id"
              placeholder="you@example.com"
              value={id}
              onChange={(e) => setId(e.target.value)}
              onKeyDown={onKeyDown}
              autoComplete="username"
            />
          </Field>

          <Field>
            <Label htmlFor="login-pw">비밀번호</Label>
            <Input
              id="login-pw"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={onKeyDown}
              autoComplete="current-password"
            />
          </Field>

          {err && <ErrorText>{err}</ErrorText>}

          <SubmitBtn
            className="login"
            onClick={handleLogin}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "로그인 중…" : "로그인"}
          </SubmitBtn>
        </Form>

        <Divider>
          <DividerText>간편 로그인</DividerText>
        </Divider>

        <SocialRow>
          <SocialBtn
            onClick={() => (window.location.href = `${apiBase}/oauth2/authorization/google`)}
            title="Google로 계속하기"
          >
            <img src={googleIcon} alt="Google" />
          </SocialBtn>
          <SocialBtn
            onClick={() => (window.location.href = `${apiBase}/oauth2/authorization/naver`)}
            title="Naver로 계속하기"
          >
            <img src={naverIcon} alt="Naver" />
          </SocialBtn>
          <SocialBtn
            onClick={() => (window.location.href = `${apiBase}/oauth2/authorization/kakao`)}
            title="Kakao로 계속하기"
          >
            <img src={kakaoIcon} alt="Kakao" />
          </SocialBtn>
        </SocialRow>

        <BottomRow>
          <span>처음이신가요?</span>
          <LinkBtn onClick={() => navigate("/register")}>회원가입</LinkBtn>
          <span>·</span>
          <LinkBtn onClick={() => navigate("/account/reset")}>비밀번호 재설정</LinkBtn>
        </BottomRow>
      </Card>
    </PageWrap>
  );
};

export default LoginForm;
