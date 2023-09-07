import clsx from "clsx";
import { useState, useEffect, useCallback } from "react";
import { Space, Button, InputRef } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import style from "./style.module.scss";
import { ValidateInput } from "~/Components";

function SignupPage() {
  // hooks
  const [triggerValidate, setTriggerValidate] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [inputRefs, setInputRefs] = useState<Array<InputRef>>([]);
  useEffect(() => {
    setTriggerValidate(false);
  }, [triggerValidate]);

  useEffect(() => {
    if (inputRefs.length) {
      inputRefs[0].focus();
    }
  }, [inputRefs]);

  const handlerInvalid = useCallback((data: InputRef) => {
    setInputRefs((inputRefs) => [...inputRefs, data]);
  }, []);

  // variables
  const { t } = useTranslation("translation");

  //functions
  /**
   * Gửi form
   */
  function submitSignupForm() {
    setInputRefs([]);
    setTriggerValidate(true);
  }

  return (
    <div className={clsx(style.signup)}>
      <h1>Messenger</h1>
      <div className={clsx(style.signup__content)}>
        <h2>{t("signupPage.title")}</h2>
        <p>{t("signupPage.description")}</p>

        <div className={clsx(style.content__form)}>
          <Space style={{ display: "flex" }}>
            <ValidateInput
              placeholder={t("signupPage.firstName")}
              size="large"
              placement="left"
              triggerValidate={triggerValidate}
              onChange={(data) => setFirstName(data)}
              rules={["required", "name"]}
              invalidRef={handlerInvalid}
            />
            <ValidateInput
              placeholder={t("signupPage.surname")}
              size="large"
              placement="right"
              triggerValidate={triggerValidate}
              onChange={(data) => setSurname(data)}
              rules={["required", "name"]}
              invalidRef={handlerInvalid}
            />
          </Space>
          <Space.Compact style={{ display: "flex" }}>
            <ValidateInput
              placeholder={t("common.email")}
              size="large"
              placement="right"
              triggerValidate={triggerValidate}
              onChange={(data) => setEmail(data)}
              rules={["required", "email"]}
              invalidRef={handlerInvalid}
            />
          </Space.Compact>
          <Space.Compact style={{ display: "flex" }}>
            <ValidateInput
              type="password"
              placeholder={t("common.password")}
              size="large"
              placement="left"
              triggerValidate={triggerValidate}
              onChange={(data) => setPassword(data)}
              rules={["required", "password"]}
              invalidRef={handlerInvalid}
            />
          </Space.Compact>
          <Space.Compact style={{ display: "flex" }}>
            <ValidateInput
              type="password"
              placeholder={t("common.confirmPassword")}
              size="large"
              placement="right"
              triggerValidate={triggerValidate}
              onChange={(data) => setRePassword(data)}
              rePassword={password}
              rules={["required", "re-password"]}
              invalidRef={handlerInvalid}
            />
          </Space.Compact>
          <Space>
            <Button
              onClick={submitSignupForm}
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
