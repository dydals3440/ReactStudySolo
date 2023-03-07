import { createContext, useState } from "react";

export const DarkModeContext = createContext();

// 외부로 부터 받아온 자식을 아래에서 보여주면 됩니다.
// 우리가 글로벌하게 기억하고 싶은 데이터, 그걸 처리하고 싶은 함수들을 이 함수 내부에서 만들어주면 됩니다.
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// 이 우산을 씌워주고 싶은 컴포넌트에다가 씌우면 이 component하위에 있는 모든 자식 요소들이 그 우산에 있는 데이터에 접근이 가능하다. 이 우산을 만들려면 react에서 제공해주는 createContext라는 것을 사용해야한다. 그 후 컴포넌트를 만들어서 자식 컴포넌트들을 받아오는 컴포넌트를 만들자,  이 자식 컴포넌트들을 위에서 만든  context에서 제공해주는 provider로 감싸고, 자식 컴포넌트와 공유하고 싶은 데이터가 있으면 value에다가 정의한다.
