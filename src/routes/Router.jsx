import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/Test";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Test />,
  },
]);
export default router;
