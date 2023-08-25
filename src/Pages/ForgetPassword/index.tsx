import React, { useState, useRef } from "react";
import { Button, Steps, Input, Space, notification } from "antd";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import style from "./style.module.scss";
function ForgetPasswordPage() {
  // hook
  const [current, setCurrent] = useState(0);
  const [api, contextHolder] = notification.useNotification();
  const linkRef = useRef<HTMLAnchorElement>(null);

  // variables
  const { t } = useTranslation("translation");
  const steps = [
    {
      title: "Check account",
    },
    {
      title: "Vertify code",
    },
    {
      title: "Change password",
    },
  ];

  // fuctions
  function openNotification() {
    const key = `open${Date.now()}`;
    let countDown = 5;

    const btn = (
      <Space>
        <Button type="link" size="large">
          <Link ref={linkRef} to="/">
            {t("recover.login")}
          </Link>
        </Button>
      </Space>
    );
    api.open({
      type: "success",
      message: t("common.success"),
      description: t("recover.notiDescription", { sec: countDown }),
      btn,
      key,
    });

    const index = setInterval(() => {
      countDown--;
      if (countDown === 0) {
        clearInterval(index);
        linkRef.current?.click();
      }
      api.open({
        type: "success",
        message: t("common.success"),
        description: t("recover.notiDescription", { sec: countDown }),
        btn,
        key,
        onClose: () => clearInterval(index),
      });
    }, 1000);
  }

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className={clsx(style.recover)}>
      <h1>Messenger</h1>
      <Steps current={current} items={items} />
      <div className={clsx(style.recover__content)}>
        {current === 0 && (
          <>
            <h2>{t("recover.step1Title")}</h2>
            <div className={clsx(style.content__form)}>
              <p>{t("recover.step1Description")}</p>
              <Input size="large" placeholder={t("common.email")} />
            </div>
          </>
        )}
        {current === 1 && (
          <>
            <h2>{t("recover.step2Title")}</h2>
            <div className={clsx(style.content__form)}>
              <p>{t("recover.step2Description")}</p>
              <Space style={{ display: "flex" }}>
                <Input size="large" placeholder={t("recover.step2Input")} />
                <p style={{ margin: 0, marginLeft: 6 }}>
                  <b>{t("recover.step2SubDescription")}</b>
                  <br /> nmhnmhnmh812@gmail.com
                </p>
              </Space>
            </div>
          </>
        )}
        {current === 2 && (
          <>
            <h2>{t("recover.step3Title")}</h2>
            <div className={clsx(style.content__form)}>
              <p>{t("recover.step3Description")}</p>
              <Input
                size="large"
                style={{ marginBottom: 12 }}
                placeholder={t("common.password")}
              />
              <Input size="large" placeholder={t("common.confirmPassword")} />
            </div>
          </>
        )}
        <div style={{ paddingLeft: 20 }}>
          {current === 0 && (
            <Button style={{ marginRight: 8 }}>
              <Link to="/">{t("recover.back")}</Link>
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{ marginRight: 8 }}
              onClick={() => setCurrent(current - 1)}
            >
              {t("recover.previous")}
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => setCurrent(current + 1)}>
              {t("recover.next")}
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={openNotification}>
              {t("recover.done")}
            </Button>
          )}
          {contextHolder}
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
