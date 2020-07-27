import LandingPage from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Gallary from "./pages/Gallary";
import OwnerAccount from "./pages/OwnerAccount";

export default [
  {
    path: "/",
    exact: true,
    component: LandingPage,
  },
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/registration",
    component: SignUp,
  },
  {
    path: "/gallary",
    component: Gallary,
  },
  {
    path: "/account",
    component: OwnerAccount,
  },
];
