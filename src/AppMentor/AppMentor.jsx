import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "용민",
    title: "개발자 지망생",
    mentor: {
      name: "엘리",
      title: "풀스택 개발자",
    },
  });
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt("당신의 멘토의 이름은 무엇인가요?");
          setPerson((prev) => ({
            ...prev,
            // person을 낱개로 풀어서 실제로 업데이트 하고자하는 것은 mentor( mentor: )
            // person에 있는 멘토를 풀어서 이름을 변경
            mentor: { ...prev.mentor, name: name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt("당신의 타이틀은 무엇인가요?");
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
