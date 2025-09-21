/**
 * 지원님 코드
 
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
 */

// src/components/Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderItem, HeaderItemWrapper, HeaderWrapper } from "../styles/components/HeaderStyled";

const Header = () => (
  <HeaderWrapper>
    <HeaderItemWrapper>
      <HeaderItem><NavLink to="/">Home</NavLink></HeaderItem>
      <HeaderItem><NavLink to="/page1">page1</NavLink></HeaderItem>
      <HeaderItem><NavLink to="/page2">page2</NavLink></HeaderItem>
      <HeaderItem><NavLink to="/page3">page3</NavLink></HeaderItem>
      <HeaderItem><NavLink to="/login">Login</NavLink></HeaderItem>
      <HeaderItem><NavLink to="/register">Register</NavLink></HeaderItem>
      <HeaderItem><NavLink to="/profile">Profile</NavLink></HeaderItem>
    </HeaderItemWrapper>
  </HeaderWrapper>
);

export default Header;
