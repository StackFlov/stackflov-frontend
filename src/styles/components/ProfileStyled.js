import styled from "styled-components";
import "../../Fonts/fonts.css";

export const ProfileWrapper = styled.div`
  width: 1400px;
  height: 900px;
  margin: 0 auto;
`;

export const ProfileTopDiv = styled.div`
  width: 1400px;
  height: 80px;
  border-bottom: 2px solid black;
  font-size: 36px;
  font-weight: bold;
`;

export const ProfileSideDiv = styled.div`
  width: 150px;
  height: 1150px;
  margin: 40px 0 0 0;
  float: left;
  border-right: 2px solid gray;
`;

export const ProfileMenuItem = styled.div`
  border-left: 1px solid
    ${(props) => {
      if (props.select == true) {
        return "#FFC341";
      } else {
        return "black";
      }
    }};
  transition-duration: 500ms;
  margin: 0 0 30px 0;
  width: 100px;
  padding: 0 0 0 10px;
  font-size: 21px;
  text-align: left;
  font-weight: ${(props) => {
    if (props.select == true) {
      return "bold";
    } else {
      return "400";
    }
  }};
`;

export const ProfileContentDiv = styled.div`
  width: 1246px;
  height: 760px;
  margin: 40px 0 0 0;
  float: left;
`;
