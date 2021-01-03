import LandingPage from "./pages/Landing/Landing";
import Gallary from "./pages/Gallary/Gallary";
import OwnerAccount from "./pages/OwnerAccount";
import Test from "./pages/TestPage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import EmailVerified from "./helpers/emailVerified";
import HomeDetails from "./pages/HomeDetails/HomeDetails";

export default [
  {
    path: "/",
    exact: true,
    component: LandingPage,
  },
  {
    path: "/gallary",
    component: Gallary,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Registration,
  },
  {
    path: "/account",
    component: OwnerAccount,
    requiresAuth: true,
  },
  {
    path: "/components",
    component: Test,
  },
  {
    path: "/home-details/:homeId",
    exact: true,
    component: HomeDetails,
  },
  {
    path: "/verified",
    component: EmailVerified,
  },
];
