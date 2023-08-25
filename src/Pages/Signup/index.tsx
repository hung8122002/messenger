import clsx from "clsx";
import { Input, Space, Button } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import style from "./style.module.scss";
function SignupPage() {
  // variables
  const { t } = useTranslation("translation");
  return (
    <div className={clsx(style.signup)}>
      <h1>Messenger</h1>
      <div className={clsx(style.signup__content)}>
        <h2>{t("signupPage.title")}</h2>
        <p>{t("signupPage.description")}</p>

        <div className={clsx(style.content__form)}>
          <Space style={{ display: "flex" }}>
            <Input placeholder={t("signupPage.firstName")} size="large" />
            <Input placeholder={t("signupPage.surname")} size="large" />
          </Space>
          <Space.Compact style={{ display: "flex" }}>
            <Input placeholder={t("common.email")} size="large" />
          </Space.Compact>
          <Space.Compact style={{ display: "flex" }}>
            <Input
              type="password"
              placeholder={t("common.password")}
              size="large"
            />
          </Space.Compact>
          <Space.Compact style={{ display: "flex" }}>
            <Input
              type="password"
              placeholder={t("common.confirmPassword")}
              size="large"
            />
          </Space.Compact>
          <Space>
            <Button
              type="primary"
              size="large"
              style={{ background: "green", padding: "0 40px" }}
            >
              <b>{t("signupPage.signup")}</b>
            </Button>
            <Link to="/">{t("signupPage.haveAccount")}</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
