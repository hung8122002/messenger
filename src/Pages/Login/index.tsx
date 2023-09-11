/* eslint-disable react/jsx-pascal-case */
import clsx from "clsx";
import { useRef, useState } from "react";
import { Input, Button, Drawer, message } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import image from "~/asset/image.png";
import { NoticeType } from "antd/es/message/interface";

import style from "./style.module.scss";
import { SignupPage, ForgetPasswordPage } from "~/Pages";

/**
 * Trang login
 * @returns tsx
 */
function LoginPage() {
  // hooks
  const [open, setOpen] = useState(false);
  const DrawerItem = useRef(SignupPage);

  // variables
  const { t } = useTranslation("translation");
  const [messageApi, contextHolder] = message.useMessage();

  // functions
  function showDrawer(type: string) {
    let item;
    if (type === "signup") {
      item = SignupPage;
    } else {
      item = ForgetPasswordPage;
    }
    DrawerItem.current = item;
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }

  function showAlert(type: NoticeType, content: string) {
    messageApi.open({
      type,
      content,
    });
    if (type === "success") {
      onClose();
    }
  }

  return (
    <div className={clsx(style.login)}>
      {contextHolder}
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
            <span onClick={() => showDrawer("recover")}>
              {t("loginPage.forgetPassword")}
            </span>{" "}
            {t("loginPage.or")}{" "}
            <span onClick={() => showDrawer("signup")}>
              {t("loginPage.createAccount")}
            </span>
          </p>
        </div>
      </div>
      <div className={clsx(style.login__right)}>
        <img src={image} alt="" />
      </div>
      <Drawer
        bodyStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClose={onClose}
        open={open}
        closable={false}
        width={600}
        destroyOnClose={true}
      >
        <div>
          <DrawerItem.current showAlert={showAlert} />
        </div>
      </Drawer>
    </div>
  );
}

export default LoginPage;
