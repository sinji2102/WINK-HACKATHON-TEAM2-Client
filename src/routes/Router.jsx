import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/test/Test.jsx";
import Register from "../pages/register/Register.jsx";
import Main from "../pages/main/Main.jsx";
import SearchResult from "../pages/searchResult/SearchResult.jsx";
import Login from "../pages/login/Login.jsx";
import Detail from "../pages/detail/Detail.jsx";
import KakaoCallback from "../pages/kakaoCallback/KakaoCallback.jsx";
import Edit from "../pages/edit/Edit.jsx";
import Favorites from "../pages/favorites/Favorites.jsx";
import AdminLogin from "../pages/login/admin/AdminLogin.jsx";
import AdminSignup from "../pages/signup/admin/AdminSignup.jsx";

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
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/login/admin",
    element: <AdminLogin />,
  },
  {
    path: "/signup/admin",
    element: <AdminSignup />,
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
    path: '/detail/:id',
    element: <Detail />
  }
]);
export default router;
