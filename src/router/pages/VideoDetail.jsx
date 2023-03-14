import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();
  // console.log(videoId)를 해보면 object로 {videoId: 'inputValue'}를 받아오는 것을 확인할 수 있다. 즉, videoId에 입력한 것들을 받아올 수 있다. videoId키가 정해진 곳은 router를 만들떄 :videoId라고 우리가 App.js의 children에 경로를 설정해주엇다. 그래서 우리가 명시한 경로의 videoId의 해당 url의 값이 값으로 들어옵니다. 구조분해 할당을통해 const {videoId} = useParams을 활용하여 간편하게 받아올 수 있습니다.
  return <div>VideoDetail {videoId} </div>;
}
