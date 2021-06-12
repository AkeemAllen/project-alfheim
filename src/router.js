import LandingPage from "./pages/Landing";
import Gallary from "./pages/Gallary";
import OwnerAccount from "./pages/OwnerAccount";
import Test from "./pages/TestPage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import EmailVerified from "./helpers/emailVerified";

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
    // requiresAuth: true,
  },
  {
    path: "/components",
    component: Test,
  },
  {
    path: "/verified",
    component: EmailVerified,
  },
];
