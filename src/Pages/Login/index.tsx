import clsx from "clsx";
import { Input, Button } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import image from "~/asset/image.png";

import style from "./style.module.scss";

/**
 * Trang login
 * @returns tsx
 */
function LoginPage() {
  // variables
  const { t } = useTranslation("translation");

  return (
    <div className={clsx(style.login)}>
      {/* Mobile */}
      <div className={clsx(style["login__left--mobile"])}>
        <img
          src="https://z-p3-static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg"
          alt=""
        />
        <p>{t("loginPage.titleMobile")}</p>
        <Input
          autoComplete="false"
          size="large"
          placeholder={t("common.email")}
        />
        <Input
          autoComplete="false"
          size="large"
          placeholder={t("common.password")}
          type="Password"
        />
        <div className={clsx(style.option)}>
          <Button type="primary" size="large" shape="round">
            {t("loginPage.login")}
          </Button>
          <h3>
            <Link to="recover">{t("loginPage.forgetPassword")}</Link>{" "}
            {t("loginPage.or")}{" "}
            <Link to="signup">{t("loginPage.createAccount")}</Link>
          </h3>
        </div>
      </div>

      {/* Pc */}
      <div className={clsx(style.login__left)}>
        <h1>{t("loginPage.title")}</h1>
        <p>{t("loginPage.description")}</p>
        <Input
          autoComplete="false"
          size="large"
          placeholder={t("common.email")}
        />
        <Input
          autoComplete="false"
          size="large"
          placeholder={t("common.password")}
          type="Password"
        />
        <div className={clsx(style.option)}>
          <Button type="primary" size="large" shape="round">
            {t("loginPage.login")}
          </Button>
          <p>
            <Link to="recover">{t("loginPage.forgetPassword")}</Link>{" "}
            {t("loginPage.or")}{" "}
            <Link to="signup">{t("loginPage.createAccount")}</Link>
          </p>
        </div>
      </div>
      <div className={clsx(style.login__right)}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default LoginPage;
