import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
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
    const { uuid, handleOpenEditModal, handleOpenDeleteModal } = this.props;
    console.log("Dropdown ", this.props);

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1" icon={<ReadOutlined />}>
          <Link to={`/articles/${uuid}`}>Read more</Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<EditOutlined />}
          onClick={(event) => console.log("Item ", event)}
        >
          <span onClick={handleOpenEditModal}>Edit</span>
        </Menu.Item>
        <Menu.Item key="3" icon={<DeleteOutlined />}>
          <span onClick={handleOpenDeleteModal}>Delete</span>
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

export default DropdownMenu;
