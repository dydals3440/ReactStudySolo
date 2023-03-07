import React from "react";
import { useImmer } from "use-immer";

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

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    // person내부에 있는 mentors의 이름을 변경하고 싶은것
    updatePerson((person) => {
      // 우리가 원하는 mentor의 이름을 찾음.
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };

  const handleDelete = () => {
    const prev = prompt("누구의 이름을 삭제하시고 싶으신가요?");
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === prev);
      person.mentors.splice(index, 1);
    });
  };

  const handleAdd = () => {
    const name = prompt("멘토의 이름은 무엇인가요?");
    const title = prompt("멘토의 직업은 무엇인가요?");
    updatePerson((person) => person.mentors.push({ name, title }));
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
