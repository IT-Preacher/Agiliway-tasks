import React, { Component } from "react";
import { Table } from "antd";
import { connect } from "react-redux";
//import { moment } from "moment";
import getArticlesThunk from "../../pages/Domains/thunks/getArticlesThunk";

const columns = [
  {
    title: "Author name",
    dataIndex: "author",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    //onFilter: (value, record) => record.name.indexOf(value) === 0,
    //sorter: (a, b) => a.name.length - b.name.length,
    //sortDirections: ["descend"],
  },
  {
    title: "Title",
    dataIndex: "name",
    defaultSortOrder: "descend",
    //sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Publish date",
    dataIndex: "createDate",
    // render: function(text) { return moment(text).formDate("MMMM Do YYYY")}
    //onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];

class Statistic extends Component {
  componentDidMount() {
    this.props.getData();
  }

  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, "extra ", extra);
  };

  render() {
    const { articlesList, loading } = this.props;
    console.log(this.props);
    return (
      <div className="statistic-page">
        <Table
          columns={columns}
          dataSource={articlesList}
          onChange={this.onChange}
          loading={loading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articlesList: state.articles.articlesList,
  loading: state.articles.loading,
});

const mapDispatchToProps = {
  getData: getArticlesThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistic);