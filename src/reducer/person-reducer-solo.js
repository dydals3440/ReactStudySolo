export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          return mentor.name === prev ? { ...mentor, name: current } : mentor;
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
      throw Error(`알수없는 액션 타입이다 ${action.type}`);
    }
  }
}
