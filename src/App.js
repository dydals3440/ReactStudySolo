import React, { useEffect, useMemo, useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = {
  //   country: isKorea ? '한국' : '외국',
  // };

  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국',
    };
  }, [isKorea]);

  // []안에 있는 값이 변경이 될떄만 useEffect가 호출이 된다! 한국 <=> 외국으로 변경될떄
  useEffect(() => {
    console.log('useEffect 호출');
  }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹니?</h2>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button
        onClick={() => {
          setIsKorea(!isKorea);
        }}
      >
        비행기 타자
      </button>
    </div>
  );
}
// import React from "react";
// import "./App.css";
// import MainProducts from "./Query/components/Mainproducts";
// import { QueryClient, QueryClientProvider } from "react-router-dom";

// // Create a Client
// const queryClient = new QueryClient();

// export default function App() {
//   return (
//     // provide the client to my app
//     <QueryClientProvider client={queryClient}>
//       return <MainProducts />
//     </QueryClientProvider>
//   );
// }
