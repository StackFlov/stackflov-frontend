import React, { useEffect, useState } from "react";
import {
  FormButtonWrapper,
  FormTitle,
  FormTitleWrapper,
  IdCheckButton,
  ImgSelector,
  ImgSelectorWrapper,
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
  const [isRegisterAble, setIsRegisterAble] = useState(false);

  useEffect(() => {
    if (password == passwordCheck) {
      setIsPasswordAble(true);
    } else {
      setIsPasswordAble(false);
    }
  }, [passwordCheck]);

  useEffect(() => {
    if (
      id.length != 0 &&
      password.length != 0 &&
      passwordCheck != false &&
      nickName.length != 0 &&
      phoneNum.length != 0 &&
      zipCode.length != 0 &&
      addr.length != 0 &&
      addrDetail.length != 0
    ) {
      setIsRegisterAble(true);
    }
  }, [
    id,
    password,
    passwordCheck,
    isPasswordAble,
    nickName,
    phoneNum,
    zipCode,
    addr,
    addrDetail,
  ]);

  const navigator = useNavigate();
  const handleRegister = async () => {
    try {
      if (isRegisterAble == true) {
        const body = {
          email: id,
          password: password,
          nickname: nickName,
          profileImage: null,
          socialType: "NONE",
          socialId: "",
          level: 0,
          role: "USER",
        };

        const response = await axios.post(
          "https://api.stackflov.com/auth/register",
          body, // ← body 따로 감싸지 않음
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true, // ← 백엔드에서 allowCredentials(true)면 이거 필수
          }
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <RegisterFormWrapper>
      <MainContainer>
        <FormTitleWrapper>
          <FormTitle>Regiter</FormTitle>
        </FormTitleWrapper>
        <ImgSelectorWrapper>
          <ImgSelector src={noneUserImg} />
        </ImgSelectorWrapper>
        <InpuItemsWrapper>
          <InputItem>
            <InputLabel width={100}>아이디</InputLabel>
            <InputValue
              width={160}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <IdCheckButton>중복 확인</IdCheckButton>
          </InputItem>
          <InputItem>
            <InputLabel width={100}>비밀번호</InputLabel>
            <InputValue
              type="password"
              width={250}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputItem>
          <InputItem>
            <InputLabel width={100}>비밀번호 확인</InputLabel>
            <InputValue
              type="password"
              width={250}
              onChange={(e) => {
                setPasswordCheck(e.target.value);
              }}
            />
          </InputItem>
          <InputItem>
            <InputLabel width={100}>닉네임</InputLabel>
            <InputValue
              width={250}
              onChange={(e) => {
                setNickName(e.target.value);
              }}
            />
          </InputItem>
          <InputItem>
            <InputLabel width={100}>전화번호</InputLabel>
            <InputValue
              width={250}
              onChange={(e) => {
                setPhoneNum(e.target.value);
              }}
            />
          </InputItem>
          <InputItem>
            <InputLabel width={100}>우편번호</InputLabel>
            <InputValue
              width={250}
              onChange={(e) => {
                setZipCode(e.target.value);
              }}
            />
          </InputItem>
          <InputItem>
            <InputLabel width={100}>주소</InputLabel>
            <InputValue
              width={250}
              onChange={(e) => {
                setAddr(e.target.value);
              }}
            />
          </InputItem>
          <InputItem>
            <InputLabel width={100}>상세주소</InputLabel>
            <InputValue
              width={250}
              onChange={(e) => {
                setAddrDetail(e.target.value);
              }}
            />
          </InputItem>
        </InpuItemsWrapper>
        <FormButtonWrapper>
          <RegisterButton
            onClick={() => {
              handleRegister();
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
