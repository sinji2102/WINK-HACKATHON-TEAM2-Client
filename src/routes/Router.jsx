import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/test/Test.jsx";
import Register from "../pages/register/Register.jsx";
import Main from "../pages/main/Main.jsx";

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
  }
]);
export default router;
