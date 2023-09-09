/* eslint-disable react-hooks/exhaustive-deps */
import { Input, InputRef, Tooltip } from "antd";
import { useState, useRef, forwardRef, useImperativeHandle } from "react";
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
  type?: "Password";
  invalidRef?: (value: any) => void;
  onChange?: (value: any) => void;
};

/**
 * Ô input dùng để validate
 * @param placement: Vị trí của tooltip
 * @param placeholder: Nội dung của input
 * @param size: Kích thước của input
 * @param rules: Các lựa chọn validate validate
 * @param rePassword: Mật khẩu đã nhập để kiểm tra confirm password
 * @param type: Kiểu input
 * @param onChange: Sự kiện thay đổi giá trị input
 * @returns JSX
 */
function ValidateInput(
  {
    placement,
    placeholder,
    size,
    rules,
    rePassword,
    type,
    onChange = () => {},
  }: validateInputProps,
  ref: any
) {
  // hooks
  // Giá trị input
  const [data, setData] = useState("");

  // Tiêu đề tooltip
  const [title, setTitle] = useState("");

  // Ref input
  const inputRef = useRef<InputRef>(null);

  useImperativeHandle(ref, () => ({
    validate() {
      return checkRule();
    },
  }));

  // variables
  const { t } = useTranslation("translation");
  const InputElement = type ? Input[type] : Input;

  // fuctions
  /**
   * Kiểu tra các rule
   */
  function checkRule() {
    if (rules?.includes("required")) {
      if (!checkNullOrEmpty()) {
        return inputRef.current;
      }
    }
    if (rules?.includes("name")) {
      if (!checkValidName()) {
        return inputRef.current;
      }
    }
    if (rules?.includes("email")) {
      if (!checkValidEmail()) {
        return inputRef.current;
      }
    }
    if (rules?.includes("password")) {
      if (!checkValidPassword()) {
        return inputRef.current;
      }
    }
    if (rules?.includes("re-password")) {
      if (!checkRepassword()) {
        return inputRef.current;
      }
    }
  }

  /**
   * Kiểm tra trống hoặc khoảng trắng
   */
  function checkNullOrEmpty() {
    if (!data.trim()) {
      setTitle("empty");
      return false;
    } else {
      return true;
    }
  }

  /**
   * Kiểm tra tên hợp lệ
   */
  function checkValidName() {
    const regex = /\d/;
    if (regex.test(data)) {
      setTitle("invalid");
      return false;
    } else {
      return true;
    }
  }

  /**
   * Kiểm tra email hợp lệ
   */
  function checkValidEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(data)) {
      setTitle("invalid");
      return false;
    } else {
      return true;
    }
  }

  /**
   * Kiểm tra mật khẩu hợp lệ
   */
  function checkValidPassword() {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
    if (!regex.test(data)) {
      setTitle("password");
      return false;
    } else {
      return true;
    }
  }

  /**
   * Kiểm tra xác nhận mật khẩu hợp lệ
   */
  function checkRepassword() {
    if (data !== rePassword) {
      setTitle("confirmPassword");
      return false;
    } else {
      return true;
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
      <InputElement
        ref={inputRef}
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
    </Tooltip>
  );
}

export default forwardRef(ValidateInput);
