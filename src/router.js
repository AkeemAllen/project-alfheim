import LandingPage from "./pages/Landing";
import SignUp from "./pages/SignUp";

export default [
  {
    path: "/",
    exact: true,
    component: LandingPage,
  },
  {
    path: "/registration",
    component: SignUp,
  },
];
