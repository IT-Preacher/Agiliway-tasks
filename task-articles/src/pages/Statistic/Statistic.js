import React, { useEffect } from "react";
import propTypes from "prop-types";
import moment from "moment";
import { Table } from "antd";
import { connect } from "react-redux";
import getArticlesThunk from "../../pages/Domains/thunks/getArticlesThunk";

const columns = [
  {
    title: "Author name",
    dataIndex: "author",
    filters: [
      {
        text: "Admin",
        value: "admin",
      },
      {
        text: "User",
        value: "user",
      },
    ],
    sorter: (a, b) => a.author.length - b.author.length,
    // sortDirections: ["descend"],
  },
  {
    title: "Title",
    dataIndex: "name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Publish date",
    dataIndex: "createDate",
    render: function (text) {
      return moment(text).format("MMMM Do YYYY, h:mm a");
    },
    defaultSortOrder: "descend",
    sorter: (a, b) => {
      if (a.createDate > b.createDate) {
        return -1;
      } else if (a.createDate < b.createDate) {
        return 1;
      }
      return 0;
    },
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
