import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import propTypes from "prop-types";
import { EditOutlined, DeleteOutlined, ReadOutlined } from "@ant-design/icons";

class DropdownMenu extends React.Component {
  state = {
    visible: false,
  };

  handleMenuClick = (event) => {
    if (event.key === "3") {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  };

  render() {
    const {
      uuid,
      article,
      handleOpenEditModal,
      handleOpenDeleteModal,
      getArticleData,
    } = this.props;

    const menu = (
      <Menu onClick={this.handleMenuClick}>
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
          onVisibleChange={this.handleVisibleChange}
          visible={this.state.visible}
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
  }
}

DropdownMenu.propTypes = {
  uuid: propTypes.string,
  article: propTypes.object,
  handleOpenEditModal: propTypes.func,
  handleOpenDeleteModal: propTypes.func,
  getArticleData: propTypes.func,
};

export default DropdownMenu;
