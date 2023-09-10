import { ReactNode } from "react";
import Footer from "./Footer";

/**
 * Layout của trang login
 * @param param0 children
 * @returns tsx
 */
function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default LoginLayout;
