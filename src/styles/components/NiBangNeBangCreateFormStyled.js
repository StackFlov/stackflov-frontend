import styled from "styled-components";
import "../../Fonts/fonts.css";

export const NiBangNeBangCreateWrapper = styled.div`
  margin: 0 auto;
  width: 1400px;
  height: 900px;
`;

export const NiBangNeBangCreateTopContent = styled.div`
  width: 1400px;
  height: 100px;
  border-bottom: 5px solid black;
`;

export const NiBangNeBangTitleDiv = styled.div`
  width: 80px;
  height: 50px;
  padding: 30px 0 0 0;
  font-size: 36px;
  font-weight: bold;
  float: left;
`;

export const NiBangNeBangTitleInputDiv = styled.input`
  width: 1200px;
  height: 90px;
  border: none;
  margin: 5px 0 0 0;
  font-size: 36px;
  &:focus {
    border: none;
  }
`;

export const NiBangNeBangDiv = styled.div`
  width: 1400px;
  height: 25px;
  font-size: 16px;
  font-weight: bold;
  color: #b6b6b6;
`;

export const NiBangNeBangCategoryDiv = styled.div`
  width: 1400px;
  height: 60px;
  font-size: 16px;
  font-weight: bold;
  float: left;
`;

export const NiBangNeBangCategoryTitle = styled.div`
  width: 100px;
  height: 40px;
  padding: 15px 0 0 0;
  font-size: 24px;
  font-weight: bold;
  float: left;
`;

export const NiBangNeBangCategorySelectorItem = styled.li`
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
  transition-duration: 500ms;
  background-color: ${(props) => {
    if (props.selectCategory == true) {
      return "#CDD8E3";
    } else {
      return "#ffffff";
    }
  }};
`;

export const NiBangNeBangCreateMiddleContent = styled.div`
  width: 1400px;
  height: 600px;
`;

export const NiBangNeBangCreateContentInput = styled.textarea`
  width: 1400px;
  height: 490px;
  margin: 30px 0 0 0;
  font-size: 36px;
`;

export const NiBangNeBangContentDiv = styled.div`
  font-size: 28px;
`;

export const NiBangNeBangCreateBottomContent = styled.div`
  margin: 10px 0 0 0;
  width: 1400px;
  height: 200px;
`;

export const NiBangNeBangCreateCancleBtn = styled.div`
  width: 100px;
  padding: 10px 0;
  font-size: 21px;
  text-align: center;
  border-radius: 30px;
  border: 2px solid #cdd8e3;
  float: right;
  transition-duration: 500ms;
  &:hover {
    background-color: #cdd8e3;
  }
`;

export const NiBangNeBangCreateBtn = styled.div`
  width: 100px;
  padding: 10px 0;
  font-size: 21px;
  text-align: center;
  border-radius: 30px;
  border: 2px solid #cdd8e3;
  float: right;
  margin: 0 20px 0 0;
  transition-duration: 500ms;
  &:hover {
    background-color: #cdd8e3;
  }
`;
