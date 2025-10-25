import React, { useEffect, useState } from "react";
import {
  Form,
  Field,
  Input,
  TextArea,
  Actions,
  SubmitBtn,
} from "../../styles/components/admin/NoticeFormStyled";

export default function NoticeForm({ initial, busy, onSubmit }) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [content, setContent] = useState(initial?.content ?? "");

  useEffect(() => {
    setTitle(initial?.title ?? "");
    setContent(initial?.content ?? "");
  }, [initial]);

  const submit = (e) => {
    e.preventDefault();
    onSubmit({ title: title.trim(), content: content.trim() });
  };

  return (
    <Form onSubmit={submit}>
      <Field htmlFor="notice-title">
        제목
        <Input
          id="notice-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="공지 제목"
        />
      </Field>

      <Field htmlFor="notice-content">
        내용
        <TextArea
          id="notice-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="공지 내용을 입력하세요"
          rows={10}
        />
      </Field>

      <Actions>
        <SubmitBtn type="submit" disabled={busy}>
          {busy ? "저장 중..." : "저장"}
        </SubmitBtn>
      </Actions>
    </Form>
  );
}
