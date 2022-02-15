import React, { useEffect } from "react";
import { Table } from "antd";
import { connect } from "react-redux";
import propTypes from "prop-types";
import getArticlesThunk from "../../pages/Domains/thunks/getArticlesThunk";
import moment from "moment";

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
    sorter: (a, b) => a.name - b.name,
  },
  {
    title: "Publish date",
    dataIndex: "createDate",
    render: function(text) { return moment(text).format("MMMM Do YYYY, h:mm a")},
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.createDate.length < b.createDate.length,
    //onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];

const Statistic = ({ articlesList, loading, getData }) => {
  useEffect(() => {
    getData();
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, "extra ", extra);
  };

  return (
    <div className="statistic-page">
      <Table
        rowKey={(articlesList) => articlesList.uuid}
        columns={columns}
        dataSource={articlesList}
        onChange={onChange}
        loading={loading}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  articlesList: state.articles.articlesList,
  loading: state.articles.loading,
});

const mapDispatchToProps = {
  getData: getArticlesThunk,
};

Statistic.propTypes = {
  articlesList: propTypes.array,
  loading: propTypes.bool,
  getData: propTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistic);
