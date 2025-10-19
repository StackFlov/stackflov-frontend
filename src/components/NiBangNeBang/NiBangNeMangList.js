import React from "react";
import {
  NiBangNeBangListItem,
  ItemWrapper,
  NiBangNeBangListCreatedAt,
  NiBangNeBangListContent,
  NiBangNeBangListTitle,
  NiBangNeBangListUser,
} from "../../styles/components/NiBangNeBangListStyled";
import { useNavigate } from "react-router-dom";

const NiBangNeMangList = ({ postsToDisplay }) => {
  const navigator = useNavigate();

  return (
    <div>
      {postsToDisplay.length === 0 ? (
        <p>
          지도에 표시된 게시글이 없거나, 선택한 카테고리에 해당하는 글이
          없습니다.
        </p>
      ) : (
        <ul>
          {postsToDisplay.map((item) => (
            <NiBangNeBangListItem key={item.id}>
              <ItemWrapper
                onClick={() => navigator(`/nibangnebang/${item.id}`)}
              >
                <NiBangNeBangListCreatedAt>
                  {item.createdAt?.slice(0, 10)}
                </NiBangNeBangListCreatedAt>
                <NiBangNeBangListContent>
                  <NiBangNeBangListTitle>{item.content}</NiBangNeBangListTitle>
                  <NiBangNeBangListUser>
                    {item.authorNickname}
                  </NiBangNeBangListUser>
                </NiBangNeBangListContent>
              </ItemWrapper>
            </NiBangNeBangListItem>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NiBangNeMangList;
