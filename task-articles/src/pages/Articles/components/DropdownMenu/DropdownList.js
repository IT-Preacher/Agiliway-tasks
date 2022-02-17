import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { EditOutlined, DeleteOutlined, ReadOutlined } from "@ant-design/icons";

const DropdownList = ({
  uuid,
  article,
  handleOpenEditModal,
  handleOpenDeleteModal,
  getArticleData,
  handleMenuClick,
}) => {
  return (
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
};

DropdownList.propTypes = {
  uuid: propTypes.string,
  article: propTypes.object,
  handleOpenEditModal: propTypes.func,
  handleOpenDeleteModal: propTypes.func,
  getArticleData: propTypes.func,
  handleMenuClick: propTypes.func,
};

export default DropdownList;
