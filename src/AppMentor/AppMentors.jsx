import React, { useState } from "react";

const initialPerson = {
  name: "용민",
  title: "개발자",
  mentors: [
    {
      name: "엘리",
      title: "드림코딩 강사",
    },
    {
      name: "밥",
      title: "시니어 개발자",
    },
    {
      name: "살라",
      title: "시니어 개발자",
    },
  ],
};

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      // mentors는 배열이니까 {} 불필요 기존의 배열을 다른 배열로 변환할 수 있는 map을 이용
      mentors: person.mentors.map((mentor) => {
        return mentor.name === prev
          ? // 해당하는 mentors 중 한명의 key와 value를 풀어서, 이름을 변경
            { ...mentor, name: current }
          : // map은 배열을 반환하기에 { mentor }가 아닌 mentor 라고 작성
            mentor;
      }),
    }));
  };

  const handleDelete = () => {
    const prev = prompt("누구의 이름을 삭제하시고 싶으신가요?");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== prev),
    }));
  };

  const handleAdd = () => {
    const name = prompt("멘토의 이름은 무엇인가요?");
    const title = prompt("멘토의 직업은 무엇인가요?");
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleDelete}>멘토 삭제 버튼</button>
      <button onClick={handleAdd}>멘토 추가 버튼</button>
    </div>
  );
}
