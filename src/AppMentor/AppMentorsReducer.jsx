import React, { useReducer } from "react";
import personReducer from "../reducer/person-reducer";

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
  // 이제 useState는 사용하지 않을 것이다.
  // const [person, setPerson] = useState(initialPerson);
  // useReducer는 객체를 새롭게 만들어나갈 로직을 작성한 (personReducer) 함수를 전달해주고, 초기값을 전달해주면 상태에 접근할 수 있는(person) 변수와 personReducer를 호출할 수 있는 dispatch라는 것이 있다. 우리가 useState에서 setPerson을 통해 새로운 person을 업데이트 한 것처럼 dispatch를 이용해서 원하는 액션을 명령할 수 있다. 이제는 복잡한 setPerson을 이용하지 않고 dispatch를 호출만 해주면 된다. 이제 우리가 뭘 원하는지 액션 객체를 전달하면 됩니다.
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    // dispatch가 호출이 되면 useReducer가 자동으로 personReducer를 호출해주는데 호출할 떄는 기존의 person-reducer.js파일에서 person이라는 객체와 함께 우리가 dispatch에 전달한 action object을 두번째 인자인 action에 전달해줍니다.
    // 그떄 이제 js파일에서 업데이트를 반영한 새로운 객체를 리턴해주고, 자동으로 state가 업데이트 되어 person에 반영이 됩니다.
    dispatch({ type: "updated", prev, current });
  };

  const handleDelete = () => {
    const prev = prompt("누구의 이름을 삭제하시고 싶으신가요?");
    dispatch({ type: "deleted", prev });
  };

  const handleAdd = () => {
    const name = prompt("멘토의 이름은 무엇인가요?");
    const title = prompt("멘토의 직업은 무엇인가요?");
    dispatch({ type: "added", name, title });
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
