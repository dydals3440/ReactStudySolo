import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Home</p>,
    errorElement: <p>Not Found๐ต</p>,
  },
  {
    path: "videos",
    element: <p>videos</p>,
  },
]);

function App() {
  // ์์์๋ router๋ก ์ฐ์ฐ์ ์์์ค
  return <RouterProvider router={router} />;
}

export default App;
