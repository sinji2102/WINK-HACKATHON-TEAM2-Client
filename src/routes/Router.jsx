import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/test/Test.jsx";
import Register from "../pages/register/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
