import LandingPage from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Gallary from "./pages/Gallary";
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
];
