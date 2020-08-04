import LandingPage from "./pages/Landing";
import Gallary from "./pages/Gallary";
import OwnerAccount from "./pages/OwnerAccount";
import AuthPage from "./pages/AuthPage";

export default [
  {
    path: "/",
    exact: true,
    component: LandingPage,
  },
  {
    path: "/auth",
    component: AuthPage,
  },
  {
    path: "/gallary",
    component: Gallary,
  },
  {
    path: "/account",
    component: OwnerAccount,
    requiresAuth: true,
  },
];
