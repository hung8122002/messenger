import clsx from "clsx";
import { Input, Button } from "antd";
import { useTranslation } from "react-i18next";

import style from "./style.module.scss";

/**
 * Trang login
 * @returns tsx
 */
function loginPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
          placeholder={t("loginPage.email")}
        />
        <Input
          autoComplete="false"
          size="large"
          placeholder={t("loginPage.password")}
          type="Password"
        />
        <div className={clsx(style.option)}>
          <Button type="primary" size="large" shape="round">
            {t("loginPage.login")}
          </Button>
          <h3>
            <a href="a">{t("loginPage.forgetPassword")}</a> {t("loginPage.or")}{" "}
            <a href="a">{t("loginPage.createAccount")}</a>
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
          placeholder={t("loginPage.email")}
        />
        <Input
          autoComplete="false"
          size="large"
          placeholder={t("loginPage.password")}
          type="Password"
        />
        <div className={clsx(style.option)}>
          <Button type="primary" size="large" shape="round">
            {t("loginPage.login")}
          </Button>
          <p>
            <a href="a">{t("loginPage.forgetPassword")}</a> {t("loginPage.or")}{" "}
            <a href="a">{t("loginPage.createAccount")}</a>
          </p>
        </div>
      </div>
      <div className={clsx(style.login__right)}>
        <img
          src="https://z-p3-scontent.fhan9-1.fna.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=J0zmPnGhk9kAX8f5u10&_nc_ht=z-p3-scontent.fhan9-1.fna&oh=00_AfCrDIyv0Z_WJzg_TMLjudDG1D_TnezmbXSe01ssYK3lqw&oe=64E83727"
          alt=""
        />
      </div>
    </div>
  );
}

export default loginPage;
