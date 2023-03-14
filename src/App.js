import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./router/pages/NotFound";
import Videos from "./router/pages/Videos";
import Home from "./router/pages/Home";
import Root from "./router/pages/Root";
import VideoDetail from "./router/pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:videoId", element: <VideoDetail /> },
    ],
  },
]);

function App() {
  // 위에있는 router로 우산을 씌워줌
  return <RouterProvider router={router} />;
}

export default App;
