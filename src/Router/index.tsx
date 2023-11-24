import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../Page/Auth";
import LeftMenu from "../Components/Menu";
const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage></AuthPage>,
  },
  {
    path: "/",
    element: <LeftMenu></LeftMenu>,
  },
]);

export default router;
