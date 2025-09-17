import styled from "styled-components";

export const UserInfosWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const UserImageDiv = styled.div`
  width: 200px;
  margin: 50px 50px 50px 50px;
  height: 200px;
  float: left;
`;

export const UserInfosDiv = styled.div`
  width: 500px;
  height: 250px;
  float: left;
  font-size: 32px;
  font-weight: 300;
  margin: 50px 0 0 0;
`;

export const TopUserLevel = styled.div`
  font-size: 36px;
  float: left;
`;

export const TopUserNameDiv = styled.div`
  width: 150px;
  font-size: 36px;
  text-align: center;
  float: left;
  font-weight: 800;
`;

export const UserInfoItems = styled.div`
  width: 300px;
  margin: 20px 0 0 0;
  font-size: 21px;
  font-weight: 800;
`;
export const UserIngoItemIcon = styled.div`
  width: 100px;
  text-align: center;
  font-weight: 500;
  border-radius: 15px;
  margin: 0 30px 0 0;
  color: #77abe0;
  float: left;
  background-color: #e3f0fe;
`;

export const UserLevelDiv = styled.div`
  width: 800px;
  margin: 50px 0 0 50px;
  float: left;
`;

export const BottomUserLevel = styled.div`
  width: 100px;
  height: 120px;
  float: left;
  font-size: 21px;
  font-weight: 700;
`;

export const BottomUserLevelIconDiv = styled.div`
  width: 700px;
  height: 50px;
  float: left;
  font-size: 21px;
  font-weight: 700;
`;

export const BottomUserLevelIcon = styled.div`
  width: 100px;
  padding: 5px 10px;
  border: 2px solid #cdd8e3;
  border-radius: 30px;
  text-align: center;
  margin: 0 20px 0 0;
  float: left;
  background-color: ${(props) => {
    if (props.level == true) {
      return "#cdd8e3";
    } else {
      return "#ffffff";
    }
  }};
`;

export const UserLevelGuidDiv = styled.div`
  float: left;
  font-size: 21px;
  font-weight: 400;
`;

export const UserHIstoryDiv = styled.div`
  width: 800px;
  height: 600px;
  margin: 20px 0 0 50px;
  float: left;
`;

export const UserHistoryItem = styled.div`
  width: 800px;
  height: 50px;
  float: left;
  margin: 40px 0 0 0;
`;

export const UserCreatedAtDiv = styled.div`
  width: 90px;
  height: 40px;
  float: left;
  font-size: 21px;
  font-weight: 700;
  margin: 10px 0 0 0;
`;

export const UserCreatedAtView = styled.div`
  font-size: 21px;
  width: 600px;
  height: 40px;
  float: left;
`;

export const UserEmailDiv = styled.div`
  width: 90px;
  height: 40px;
  float: left;
  font-size: 21px;
  font-weight: 700;
  margin: 10px 0 0 0;
`;

export const UserEmailView = styled.div`
  font-size: 21px;
  width: 600px;
  height: 40px;
  float: left;
`;

export const UserNickNameDiv = styled.div`
  width: 90px;
  height: 40px;
  float: left;
  font-size: 21px;
  font-weight: 700;
  margin: 10px 0 0 0;
`;

export const UserNickNameInput = styled.input`
  width: 350px;
  height: 40px;
  font-size: 21px;
  float: left;
  border: 1px solid black;
`;

export const UserPhoneDiv = styled.div`
  width: 90px;
  height: 40px;
  float: left;
  font-size: 21px;
  font-weight: 700;
  margin: 10px 0 0 0;
`;

export const UserPhoneInput = styled.input`
  width: 350px;
  height: 40px;
  font-size: 21px;
  float: left;
  border: 1px solid black;
`;

export const UserAddrDiv = styled.div`
  width: 90px;
  height: 40px;
  float: left;
  font-size: 21px;
  font-weight: 700;
  margin: 10px 0 0 0;
`;

export const UserZipCodeInput = styled.input`
  width: 250px;
  height: 40px;
  font-size: 21px;
  float: left;
  border: 1px solid black;
`;

export const UserZipCodeBtn = styled.div`
  float: left;
  width: 80px;
  height: 30px;
  padding: 5px 0;
  margin: 0 20px 0 20px;
  border: 2px solid #cdd8e3;
  font-weight: 700;
  border-radius: 15px;
  text-align: center;
  transition-duration: 500ms;

  &:hover {
    background-color: #cdd8e3;
  }
`;

export const UserAddrInput = styled.input`
  width: 450px;
  height: 40px;
  margin: 0 0 0 90px;
  font-size: 21px;
  float: left;
  border: 1px solid black;
  font-size: 21px;
`;

export const UserAddrDetialInput = styled.input`
  width: 700px;
  height: 40px;
  margin: 10px 0 0 90px;
  border: 1px solid black;
  font-size: 21px;
`;

export const UserInfoBtnDiv = styled.div`
  width: 1250px;
  height: 100px;

  float: left;
`;

export const UserInfoUpdateCancleBtn = styled.div`
  width: 100px;
  height: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  padding: 10px 0;
  border-radius: 20px;
  border: 2px solid #cdd8e3;
  background-color: #ffffff;
  float: right;
  transition-duration: 500ms;
  margin: 0 20px 0 0;
  &:hover {
    background-color: #cdd8e3;
  }
`;

export const UserInfoUpdateBtn = styled.div`
  width: 100px;
  height: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  padding: 10px 0;
  border-radius: 20px;
  border: 2px solid #cdd8e3;
  background-color: #ffffff;
  float: right;
  transition-duration: 500ms;
  &:hover {
    background-color: #cdd8e3;
  }
`;
