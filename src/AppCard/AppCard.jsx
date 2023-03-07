import React from "react";

export default function AppCard() {
  return (
    <>
      <Card>
        <p>card1</p>
      </Card>
      <Card>
        <h1>Card2</h1>
        <p>설명</p>
      </Card>
      {/* 조금더 복잡한 형태 article 태그를 이용해 이미지태그, 설명 이런거를 추가할 수도 있다. 이것만 잘 활용하면 예를 들어 웹사이트에 section으로 나누는 공통적인 패딩을 갖는 컴포넌트 아티클 컴포넌트, 정해진 구조가 아니라 어떤 article은 사진이있고, 없고, 이런식으로 나눌 수도있다.*/}
      <Card>
        <article></article>
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        minHeight: "200px",
        maxWidth: "200px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
