import React, { Component } from "react";
import "./Articles.scss";
import { connect } from "react-redux";
import getArticlesThunk from "../../pages/Domains/thunks/getArticlesThunk";
import ArticleItem from "./ArticleItem.js";
import { Modal, Button } from "antd";
import ArticleAddModal from "../Domains/ArticleAddModal";

class Articles extends Component {
  state = {
    visibleEditModal: false,
  };

  componentDidMount() {
    this.props.getData();
  }

  showEditModal = () => {
    this.setState({ ...this.state, visibleEditModal: true });
  };

  handleEditModalOk = () => {
    this.setState({ ...this.state, visibleEditModal: false });
  };

  handleEditModalCancel = () => {
    this.setState({ ...this.state, visibleEditModal: false });
  };

  render() {
    const { articlesList, loading } = this.props;

    return (
      <div className="articles-page">
        <div>
          <ArticleAddModal />
        </div>
        <div className="article-content-conteiner">
          {loading ? (
            <div>Loading...</div>
          ) : (
            articlesList.map((article, index) => (
              <ArticleItem
                key={article.uuid}
                article={article}
                showEditModal={this.showEditModal}
                handleEditModalOk={this.handleEditModalOk}
                handleEditModalCancel={this.handleEditModalCancel}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articlesList: state.articles.articlesList,
  loading: state.articles.loading,
  error: state.articles.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getArticlesThunk());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
