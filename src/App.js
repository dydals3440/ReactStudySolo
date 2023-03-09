import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Home</p>,
    errorElement: <p>Not Found😵</p>,
  },
  {
    path: "videos",
    element: <p>videos</p>,
  },
]);

function App() {
  // 위에있는 router로 우산을 씌워줌
  return <RouterProvider router={router} />;
}

export default App;
