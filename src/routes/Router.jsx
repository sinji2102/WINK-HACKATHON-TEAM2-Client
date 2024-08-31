import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/test/Test.jsx";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Test />,
  },
]);
export default router;
