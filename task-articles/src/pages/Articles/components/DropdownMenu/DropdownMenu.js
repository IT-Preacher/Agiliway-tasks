import React, { useState } from "react";
import { Dropdown } from "antd";
import DropdownList from "./DropdownList";

const DropdownMenu = (props) => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (event) => {
    if (event.key === "3") {
      this.setState({ visible: false });
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  return (
    <div className="dropdown-menu-article">
      <Dropdown
        overlay={<DropdownList {...props} handleMenuClick={handleMenuClick} />}
        onVisibleChange={handleVisibleChange}
        visible={visible}
      >
        <a
          className="ant-dropdown-link"
          onClick={(event) => event.preventDefault()}
        >
          <img src="https://img.icons8.com/ios-glyphs/30/000000/more.png" />
        </a>
      </Dropdown>
    </div>
  );
};

export default DropdownMenu;
