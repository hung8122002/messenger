/* eslint-disable react-hooks/exhaustive-deps */
import { Input, InputRef, Tooltip } from "antd";
import { useEffect, useState, useRef, memo } from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { TooltipPlacement } from "antd/es/tooltip";
import { useTranslation } from "react-i18next";

type rule = "required" | "name" | "email" | "password" | "re-password";

type validateInputProps = {
  placeholder?: string;
  size?: "large" | "middle" | "small";
  placement?: TooltipPlacement;
  triggerValidate?: number;
  rules?: Array<rule>;
  rePassword?: string;
  type?: "number" | "text" | "password";
  invalidRef?: (value: any) => void;
  onChange?: (value: any) => void;
};

/**
 * Ô input dùng để validate
 * @param placement: Vị trí của tooltip
 * @param placeholder: Nội dung của input
 * @param size: Kích thước của input
 * @param triggerValidate: Kích hoạt sự kiện validate
 * @param rules: Các lựa chọn validate validate
 * @param rePassword: Mật khẩu đã nhập để kiểm tra confirm password
 * @param type: Kiểu input
 * @param invalidRef: Ref của input (được gửi khi input không hợp lệ)
 * @param onChange: Sự kiện thay đổi giá trị input
 * @returns JSX
 */
function ValidateInput({
  placement,
  placeholder,
  size,
  triggerValidate,
  rules,
  rePassword,
  type,
  invalidRef = () => {},
  onChange = () => {},
}: validateInputProps) {
  // hooks
  // Giá trị input
  const [data, setData] = useState("");

  // Tiêu đề tooltip
  const [title, setTitle] = useState("");

  const [isValid, setIsValid] = useState(true);

  // Ref input
  const componentRef = useRef<InputRef>(null);

  useEffect(() => {
    setIsValid(true);
    console.log(isValid);
    setIsValid(true);
    checkRule();
    setIsValid(true);
  }, [triggerValidate]);

  useEffect(() => {
    if (!isValid) {
      invalidRef(componentRef.current);
    }
  }, [isValid]);

  // variables
  const { t } = useTranslation("translation");

  // fuctions
  /**
   * Kiểu tra các rule
   */
  function checkRule() {
    if (rules?.includes("required")) {
      checkNullOrEmpty();
    }
    if (rules?.includes("name")) {
      checkValidName();
    }
    if (rules?.includes("email")) {
      checkValidEmail();
    }
    if (rules?.includes("password")) {
      checkValidPassword();
    }
    if (rules?.includes("re-password")) {
      checkRepassword();
    }
  }

  /**
   * Kiểm tra trống hoặc khoảng trắng
   */
  function checkNullOrEmpty() {
    if (!data.trim()) {
      setTitle("empty");
      setIsValid(false);
    }
  }

  /**
   * Kiểm tra tên hợp lệ
   */
  function checkValidName() {
    const regex = /\d/;
    if (data.trim() && regex.test(data)) {
      setTitle("invalid");
      setIsValid(false);
    }
  }

  /**
   * Kiểm tra email hợp lệ
   */
  function checkValidEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.trim() && !regex.test(data)) {
      setTitle("invalid");
      setIsValid(false);
    }
  }

  /**
   * Kiểm tra mật khẩu hợp lệ
   */
  function checkValidPassword() {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
    if (data.trim() && !regex.test(data)) {
      setTitle("password");
      setIsValid(false);
    }
  }

  /**
   * Kiểm tra xác nhận mật khẩu hợp lệ
   */
  function checkRepassword() {
    if (data.trim() && data !== rePassword) {
      setTitle("confirmPassword");
      setIsValid(false);
    }
  }

  return (
    <Tooltip
      title={
        title &&
        t(`validate.${title}`, {
          message: placeholder,
        })
      }
      placement={placement}
      color="red"
    >
      {type === "password" ? (
        <Input.Password
          ref={componentRef}
          placeholder={placeholder}
          size={size}
          status={title && "error"}
          suffix={
            <ExclamationCircleFilled style={{ display: title ? "" : "none" }} />
          }
          onChange={(e) => {
            setData(e.target.value);
            onChange(e.target.value);
            setTitle("");
          }}
        />
      ) : (
        <Input
          ref={componentRef}
          placeholder={placeholder}
          size={size}
          status={title && "error"}
          suffix={
            <ExclamationCircleFilled style={{ display: title ? "" : "none" }} />
          }
          onChange={(e) => {
            setData(e.target.value);
            onChange(e.target.value);
            setTitle("");
          }}
        />
      )}
    </Tooltip>
  );
}

export default memo(ValidateInput);
