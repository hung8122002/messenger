import { ReactNode } from "react";
import clsx from "clsx";

import style from "./style.module.scss";
import Footer from "./Footer";

function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default LoginLayout;