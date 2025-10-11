import styled from "styled-components";
import "../../Fonts/fonts.css";

export const UserReplysWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const UserReplysTopDiv = styled.div`
  width: 1250px;
  height: 60px;
  float: left;
  margin: 0 0 40px 50px;
`;

export const UserReplyTitleDiv = styled.div`
  width: 1000px;
  height: 60px;
  float: left;
  font-size: 36px;
  font-weight: 700;
`;

export const UserReplyContentDiv = styled.div`
  width: 1100px;
  height: 60px;
  float: left;
  font-size: 21px;
  font-weight: 700;
`;

export const UserReplysFilterSelector = styled.select`
  width: 120px;
  height: 60px;
  float: right;
  border: 2px solid #cdd8e3;
  border-radius: 20px;
  text-align: center;
  font-size: 21px;
  font-weight: 700;
`;

export const UserReplysFilterIcon = styled.div`
  width: 60px;
  height: 40px;
  padding: 10px;
  float: right;
  border-radius: 20px;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
`;

export const UserReplysTitleIcon = styled.div``;

export const UserReplysListDiv = styled.div`
  width: 1200px;
  height: 80px;
  border-bottom: 1px solid black;
  float: left;
  margin: 0 0 0 50px;
`;

export const UserReplysCreateAtDiv = styled.div`
  width: 200px;
  height: 30px;
  float: left;
`;

export const UserReplysPostTitleDiv = styled.div`
  width: 1100px;
  height: 30px;
  float: left;
`;

export const UserPostTitleDiv = styled.div`
  width: 800px;
  font-size: 24px;
  font-weight: 700;
  float: left;
`;

export const UserPostViewsDiv = styled.div`
  width: 100px;
  font-size: 21px;
  font-weigt: 400;
  color: gary;
  float: left;
`;

export const UserPostGoodsDiv = styled.div`
  width: 100px;
  font-size: 21px;
  font-weigt: 400;
  color: gary;
  float: left;
`;

export const UserPostBookMarksDiv = styled.div`
  width: 100px;
  font-size: 21px;
  font-weigt: 400;
  color: gary;
  float: left;
`;

export const UserReplysDelBtn = styled.div`
  width: 60px;
  text-align: center;
  border-radius: 20px;
  font-size: 21px;
  font-weigt: 400;
  color: #ffc7c8;
  border: 2px solid #ffc7c8;
  float: left;
  transition-duration: 500ms;
  &:hover {
    color: #ff3030;
    background-color: #ffc7c8;
  }
`;
