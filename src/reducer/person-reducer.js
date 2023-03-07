// 기존에 person이라는 객체를 받아오서 이것을 가지고 무엇을 하기를 원할껀지 action을 받아옵니다.
export default function personReducer(person, action) {
  // action의 타입별로 원하는 것을 해줄 것이다.
  switch (action.type) {
    case "updated": {
      // 각각 해당하는 action에 필요하는 데이터를 받아옵니다.
      //   const prev = action.prev;
      //   const current = action.current
      //   위의 코드와 동일 (object decontrucsting)
      const { prev, current } = action;
      //   기존의 person을 새로운 객체로 아래의 코드블럭으로 리턴하고있음.
      return {
        ...person,
        // mentors는 배열이니까 {} 불필요 기존의 배열을 다른 배열로 변환할 수 있는 map을 이용
        mentors: person.mentors.map((mentor) => {
          return mentor.name === prev
            ? // 해당하는 mentors 중 한명의 key와 value를 풀어서, 이름을 변경
              { ...mentor, name: current }
            : // map은 배열을 반환하기에 { mentor }가 아닌 mentor 라고 작성
              mentor;
        }),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case "deleted": {
      const { prev } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== prev),
      };
    }
    default: {
      // "알수없는 액션 타입이다." 이렇게 해도되지만 어떤 action 부분에서 에러가 발생했는지 알기 쉽게 백틱으로 정의
      throw Error(`알수없는 액션 타입이다 ${action.type}`);
    }
  }
}
