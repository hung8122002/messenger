import { Input, Tooltip } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { TooltipPlacement } from "antd/es/tooltip";

type validateInputProps = {
  title?: string;
  placeholder?: string;
  size?: "large" | "middle" | "small";
  placement?: TooltipPlacement;
};

/**
 * Ô input dùng để validate
 * @param title: Nội dung của tooltip
 * @param placement: Vị trí của tooltip
 * @param placeholder: Nội dung của input
 * @param size: Kích thước của input
 * @returns JSX
 */
function ValidateInput({
  title,
  placement,
  placeholder,
  size,
}: validateInputProps) {
  return (
    <Tooltip title={title} placement={placement} color="red">
      <Input
        placeholder={placeholder}
        size={size}
        status="error"
        suffix={<ExclamationCircleFilled />}
      ></Input>
    </Tooltip>
  );
}

export default ValidateInput;
