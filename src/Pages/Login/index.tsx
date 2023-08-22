import clsx from "clsx";
import { Input, Button } from "antd";

import style from "./style.module.scss";
/**
 * Trang login
 * @returns tsx
 */
function LoginPage() {
  return (
    <div className={clsx(style.Login)}>
      <div className={clsx(style.Login__Left)}>
        <h1>Hang out anytime, anywhere</h1>
        <p>
          Messenger makes it easy and fun to stay close to your favourite
          people.
        </p>
        <Input autoComplete="false" size="large" placeholder="Email address" />
        <Input
          autoComplete="false"
          size="large"
          placeholder="Password"
          type="Password"
        />
        <div className={clsx(style.option)}>
          <Button type="primary" size="large" shape="round">
            Log In
          </Button>
          <p><a href="a">Forget password</a> or <a href="a">Create account</a></p>
        </div>
      </div>
      <div className={clsx(style.Login__Right)}>
        <img
          src="https://z-p3-scontent.fhan9-1.fna.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=J0zmPnGhk9kAX8f5u10&_nc_ht=z-p3-scontent.fhan9-1.fna&oh=00_AfCrDIyv0Z_WJzg_TMLjudDG1D_TnezmbXSe01ssYK3lqw&oe=64E83727"
          alt=""
        />
      </div>
    </div>
  );
}

export default LoginPage;
