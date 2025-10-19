import React, { useState } from "react";
import {
  FormItemsWrapper,
  LoginFormWrapper,
  MainContainer,
  FormTitle,
  FormInputWrapper,
  EasyRegisterButtonsWrapper,
  EasyRegisterButton,
  FormLoginButton,
  FormUserButtonsWrapper,
  FormUserButton,
  FormTitleWrapper,
} from "../../styles/components/LoginFormStyled";
import googleIcon from "../../assets/google-logo.png";
import naverIcon from "../../assets/NAVER_AI-05.png";
import kakoIcon from "../../assets/KakaoTalk_logo.svg.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import axios from "axios";
const LoginForm = () => {
  const navigator = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const body = { email: id, password: password };
      const response = await axios
        .post(
          "https://api.stackflov.com/auth/login",
          body, // ← body 따로 감싸지 않음
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true, // ← 백엔드에서 allowCredentials(true)면 이거 필수
          }
        )
        .then((res) => {
          Cookies.set("accessToken", res.data.accessToken); // res.data에 토큰이 있다고 가정
          Cookies.set("refreshToken", res.data.refreshToken); // res.data에 토큰이 있다고 가정
          navigator("/tracelog");
        });

      // setGeneratedData(response.data);
      // navigator("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <LoginFormWrapper>
      <MainContainer>
        <FormItemsWrapper>
          <FormTitleWrapper>
            <FormTitle>Login</FormTitle>
          </FormTitleWrapper>
          <FormInputWrapper>
            <label>ID</label>
            <input
              placeholder="ID"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleLogin();
                }
              }}
            />
          </FormInputWrapper>
          <FormInputWrapper>
            <label>PASSWORD</label>
            <input
              type={"password"}
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleLogin();
                }
              }}
            />
          </FormInputWrapper>
          <FormLoginButton
            className="login"
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </FormLoginButton>
          <EasyRegisterButtonsWrapper>
            <EasyRegisterButton src={googleIcon} />
            <EasyRegisterButton src={naverIcon} />
            <EasyRegisterButton src={kakoIcon} />
          </EasyRegisterButtonsWrapper>
          <FormUserButtonsWrapper>
            <FormUserButton onClick={() => navigator("/register")} width={80}>
              회원가입
            </FormUserButton>
            <FormUserButton width={100}>비밀번호 변경</FormUserButton>
          </FormUserButtonsWrapper>
        </FormItemsWrapper>
      </MainContainer>
    </LoginFormWrapper>
  );
};

export default LoginForm;
