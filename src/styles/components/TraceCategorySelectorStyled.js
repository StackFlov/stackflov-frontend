import styled from "styled-components";
import "../../Fonts/fonts.css";

export const TraceCategorySelectorWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: 250px;
`;

export const TraceLogBigTitleWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: 80px;
  border-bottom: 5px solid black;
  font-size: 48px;
  font-weight: bold;
`;

export const TraceCategorySelectors = styled.ul`
  margin: 0 auto;
  width: 1200px;
  height: 150px;
`;

export const TraceCategorySelectorItem = styled.li`
  margin: 0 auto;
  width: 70px;
  padding: 10px 15px;
  height: 20px;
  float: left;
  list-style: none;
  border: 2px solid #cdd8e3;
  border-radius: 15px;
  margin: 10px 10px 0 0;
  text-align: center;
  background-color: ${(props) => {
    if (props.selectCategory == true) {
      return "#CDD8E3";
    } else {
      return "#ffffff";
    }
  }};
  transition-duration: 500ms;
`;

export const TraceCreateDiv = styled.div`
  width: 70px;
  padding: 10px 15px;
  height: 20px;
  float: right;
  list-style: none;
  border: 2px solid #cdd8e3;
  border-radius: 15px;
  margin: 10px 40px 0 0;
  text-align: center;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #cdd8e3;
  }
  transition-duration: 500ms;
`;
