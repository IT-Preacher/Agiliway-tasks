import React, { Component } from "react";
import "./Articles.scss";
import { connect } from "react-redux";
import getArticlesThunk from "../../pages/Domains/thunks/getArticlesThunk";
import ArticleItem from "./ArticleItem.js";
import ArticleAddModal from "../Domains/ArticleAddModal";
import ArticleEditModal from "../Domains/ArticleEditModal";
import ArticleDeleteModal from "../Domains/ArticleDeleteModal";
import {
  editArticleCloseAction,
  editArticleOpenAction,
} from "../Domains/actions/editArticleAction";
import {
  deleteArticleCloseAction,
  deleteArticleOpenAction,
} from "../Domains/actions/deleteArticleAction";

class Articles extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const {
      articlesList,
      loading,
      closeEditModal,
      openEditModal,
      visibleEditModal,
      visibleDeleteModal,
      closeDeleteModal,
      openDeleteModal,
    } = this.props;

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
                visibleEditModal={visibleEditModal}
                handleOpenEditModal={openEditModal}
                handleCloseEditModal={closeEditModal}
                visibleDeleteModal={visibleDeleteModal}
                handleOpenDeleteModal={openDeleteModal}
                handleCloseDeleteModal={closeDeleteModal}
              />
            ))
          )}
        </div>
        {visibleEditModal ? (
          <ArticleEditModal
            visible={visibleEditModal}
            handleCancel={closeEditModal}
          />
        ) : null}
        {visibleDeleteModal ? (
          <ArticleDeleteModal
            visible={visibleDeleteModal}
            handleCancel={closeDeleteModal}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articlesList: state.articles.articlesList,
  loading: state.articles.loading,
  error: state.articles.error,

  loadingEditModal: state.editArticleModal.isLoading,
  errorEditModal: state.editArticleModal.isError,
  visibleEditModal: state.editArticleModal.modalVisible,

  loadingDeleteModal: state.deleteArticleModal.isLoading,
  errorDeleteModal: state.deleteArticleModal.isError,
  visibleDeleteModal: state.deleteArticleModal.modalVisible,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getArticlesThunk());
    },
    closeEditModal: () => {
      dispatch(editArticleCloseAction());
    },
    openEditModal: () => {
      dispatch(editArticleOpenAction());
    },
    closeDeleteModal: () => {
      dispatch(deleteArticleCloseAction());
    },
    openDeleteModal: () => {
      dispatch(deleteArticleOpenAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
