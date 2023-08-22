import { Select, Space } from "antd";
import clsx from "clsx";

import style from "./style.module.scss";
/**
 * Footer của login page
 * @returns tsx
 */
function Footer() {
  return (
    <div className={clsx(style.footer)}>
      <div className="flex align-center">
        <p>
          &copy; <b>Meta 2023</b>
        </p>
        <p style={{ marginLeft: "10px" }}>
          The Apple and Google Play logos are trademarks of their respective
          owners.
        </p>
      </div>
      <div className="flex">
        <Space wrap>
          <Select
            defaultValue="English"
            style={{ width: 120 }}
            bordered={false}
            placement="topLeft"
            popupMatchSelectWidth={false}
            options={[
              { value: "Vietnamese", label: "Vietnamese" },
              { value: "English", label: "English" },
            ]}
          />
        </Space>
        <img
          className={clsx(style.footer__image)}
          src="https://z-p3-scontent.fhan9-1.fna.fbcdn.net/v/t39.8562-6/284131241_398860802255675_7090232386370085328_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=7NX0qGl6nkEAX_R-EQr&_nc_ht=z-p3-scontent.fhan9-1.fna&oh=00_AfBFIhPc9JvMB2_8HdKNtNMGs5CTsCh4HKS1fVQ0gGAchw&oe=64E99286"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
