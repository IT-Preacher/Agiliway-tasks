import React, { useState } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { EditOutlined, DeleteOutlined, ReadOutlined } from "@ant-design/icons";

const DropdownMenu = (props) => {
  const {
    uuid,
    article,
    handleOpenEditModal,
    handleOpenDeleteModal,
    getArticleData,
  } = props;
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (event) => {
    if (event.key === "3") {
      this.setState({ visible: false });
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<ReadOutlined />}>
        <Link to={`/articles/${uuid}`}>Read more</Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<EditOutlined />}
        onClick={() => {
          handleOpenEditModal(uuid);
          getArticleData(uuid);
        }}
      >
        <span>Edit</span>
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={<DeleteOutlined />}
        onClick={() => {
          handleOpenDeleteModal(article);
        }}
      >
        <span>Delete</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="dropdown-menu-article">
      <Dropdown
        overlay={menu}
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

DropdownMenu.propTypes = {
  uuid: propTypes.string,
  article: propTypes.object,
  handleOpenEditModal: propTypes.func,
  handleOpenDeleteModal: propTypes.func,
  getArticleData: propTypes.func,
};

export default DropdownMenu;
