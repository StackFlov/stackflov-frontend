import React from "react";
import {
  HeaderItem,
  HeaderItemWrapper,
  HeaderWrapper,
} from "../styles/components/HeaderStyled";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderItemWrapper>
        <HeaderItem>
          <a href="/">Home</a>
        </HeaderItem>
        <HeaderItem>
          <a href="/page1">page1</a>
        </HeaderItem>
        <HeaderItem>
          <a href="/page2">page2</a>
        </HeaderItem>
        <HeaderItem>
          <a href="/page3">page3</a>
        </HeaderItem>
        <HeaderItem>
          <a href="/login">Login</a>
        </HeaderItem>
        <HeaderItem>
          <a href="/register">Register</a>
        </HeaderItem>
        <HeaderItem>
          <a href="/profile">Profile</a>
        </HeaderItem>
      </HeaderItemWrapper>
    </HeaderWrapper>
  );
};

export default Header;
