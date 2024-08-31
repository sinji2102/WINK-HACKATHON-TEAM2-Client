import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/test/Test.jsx";
import Register from "../pages/register/Register.jsx";
import Main from "../pages/main/Main.jsx";
import SearchResult from "../pages/searchResult/SearchResult.jsx";
import Login from "../pages/login/Login.jsx";
import Detail from "../pages/detail/Detail.jsx";
import KakaoCallback from "../pages/kakaoCallback/KakaoCallback.jsx";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search/:query",
    element: <SearchResult />
  },
  {
    path: '/callback',
    element: <KakaoCallback />,
  },
  {
    path: '/detail',
    element: <Detail />
  }
]);
export default router;
