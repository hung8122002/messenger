import clsx from "clsx";
import { useState, useRef } from "react";
import { Space, Button, InputRef } from "antd";
import { useTranslation } from "react-i18next";

import style from "./style.module.scss";
import { ValidateInput } from "~/Components";
import { validateInputRef } from "~/interface";
import { post } from "~/utils";
import { authApi } from "~/api";
import { NoticeType } from "antd/es/message/interface";

type pageProps = {
  showAlert?: (type: NoticeType, content: string) => void;
};

function SignupPage({ showAlert = () => {} }: pageProps) {
  // hooks
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signupForm = {
    firstnameRef: useRef<validateInputRef>(),
    surnamrRef: useRef<validateInputRef>(),
    emailRef: useRef<validateInputRef>(),
    passwordRef: useRef<validateInputRef>(),
    repasswordRef: useRef<validateInputRef>(),
  };
  // variables
  const { t } = useTranslation("translation");

  //functions
  /**
   * Kiểm tra form
   */
  function submitSignupForm() {
    let invalidRef: InputRef | undefined = undefined;
    for (const propName in signupForm) {
      const item =
        signupForm[propName as keyof typeof signupForm].current?.validate();
      if (!invalidRef) {
        invalidRef = item;
      }
    }
    if (invalidRef) {
      invalidRef?.focus();
    } else {
      signup();
    }
  }

  /**
   * Đăng nhập
   */
  function signup() {
    post(authApi.signup, {
      firstname,
      surname,
      email,
      password,
    })
      .then(() => {
        showAlert("success", t("signupPage.success"));
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          signupForm.emailRef.current?.existEmail(true);
        }
        showAlert("error", "Something went wrong, please try again");
      });
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
              onChange={(data) => setFirstname(data)}
              rules={["required", "name"]}
              ref={signupForm.firstnameRef}
            />
            <ValidateInput
              placeholder={t("signupPage.surname")}
              size="large"
              placement="right"
              onChange={(data) => setSurname(data)}
              rules={["required", "name"]}
              ref={signupForm.surnamrRef}
            />
          </Space>
          <Space.Compact style={{ display: "flex" }}>
            <ValidateInput
              placeholder={t("common.email")}
              size="large"
              placement="right"
              onChange={(data) => setEmail(data)}
              rules={["required", "email"]}
              ref={signupForm.emailRef}
            />
          </Space.Compact>
          <Space.Compact style={{ display: "flex" }}>
            <ValidateInput
              type="Password"
              placeholder={t("common.password")}
              size="large"
              placement="left"
              onChange={(data) => setPassword(data)}
              rules={["required", "password"]}
              ref={signupForm.passwordRef}
            />
          </Space.Compact>
          <Space.Compact style={{ display: "flex" }}>
            <ValidateInput
              type="Password"
              placeholder={t("common.confirmPassword")}
              size="large"
              placement="right"
              rePassword={password}
              rules={["required", "re-password"]}
              ref={signupForm.repasswordRef}
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
          </Space>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
