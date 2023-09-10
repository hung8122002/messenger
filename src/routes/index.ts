import { LoginPage, SignupPage, ForgetPasswordPage } from "~/Pages";
import { LoginLayout } from "~/Layout";

/**
 * Routes được phép truy cập khi không phải đăng nhập
 */
const publicRoutes = [{ path: "/", component: LoginPage, layout: LoginLayout }];

/**
 * Routes không phép truy cập khi không đăng nhập
 */
const privateRoutes = [null];

export { publicRoutes, privateRoutes };
