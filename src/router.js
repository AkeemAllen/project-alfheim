import LandingPage from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
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
];
