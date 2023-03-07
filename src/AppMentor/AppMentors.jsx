import React, { useState, useMemo, useCallback, memo } from "react";

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
  const handleUpdate = useCallback(() => {
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
  }, []);

  const handleDelete = useCallback(() => {
    const prev = prompt("누구의 이름을 삭제하시고 싶으신가요?");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== prev),
    }));
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt("멘토의 이름은 무엇인가요?");
    const title = prompt("멘토의 직업은 무엇인가요?");
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  }, []);

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
      {/* Button컴포넌트를 만들떄는 매번 새롭게 만든 함수 객체들이 prop으로 전달됨, text라는 값에 새로운 멘토 이름 바꾸기라는 ㅁ누자열 갑싱 할당이 되어짐 const buttonName = '멘토이름바꾸기' 이것과 동일한 과정*/}
      <Button text="멘토 이름 바꾸기" onClick={handleUpdate}></Button>
      <Button text="삭제하기" onClick={handleDelete}></Button>
      <Button text="멘토 추가하기" onClick={handleAdd}></Button>
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log("button", text, "re-randering 🐤");
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log("🍊");
  }
  return 10;
}
