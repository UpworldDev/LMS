import LoginPage from 'views/Pages/LoginPage.jsx';
import RegisterPage from 'views/Pages/RegisterPage.jsx';
import LockScreenPage from 'views/Pages/LockScreenPage.jsx';

var pagesRoutes = [
    { path: "/pages/login-page", name: "Login Page", mini: "LP", component: LoginPage },
    { path: "/pages/register-page", name: "Register", mini: "RP", component: RegisterPage },
    { path: "/pages/lock-screen-page", name: "Lock Screen Page", mini: "LSP", component: LockScreenPage }
];

export default pagesRoutes;
