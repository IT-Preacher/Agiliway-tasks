import React, { Component } from "react";
import "./Articles.scss";
import { Spin } from "antd";
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
import { getDataArticleThunk, editArticleThunk } from "../Domains/thunks/editArticleThunk";
import { getArticleForDeleteThunk, deleteArticleThunk } from "../Domains/thunks/deleteArticleThunk";

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
      editArticleData,
      visibleEditModal,
      articleValues,
      visibleDeleteModal,
      closeDeleteModal,
      openDeleteModal,
      getArticleData,
      elementToDeleteData,
      getArticleForDelete,
      deleteArticle,
    } = this.props;

    console.log("getArticleData page article ", getArticleData);
    console.log("getArticleForDelete page article ", getArticleForDelete);

    return (
      <div className="articles-page">
        <div>
          <ArticleAddModal />
        </div>
        <div className="article-content-conteiner">
          {loading ? (
            <Spin style={{fontSize: 36}}/>
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
                getArticleData={getArticleData}
                getArticleForDelete={getArticleForDelete}
              />
            ))
          )}
        </div>
        {visibleEditModal ? (
          <ArticleEditModal
            editArticleData={editArticleData}
            values={articleValues}
            visible={visibleEditModal}
            handleCancel={closeEditModal}
          />
        ) : null}
        {visibleDeleteModal ? (
          <ArticleDeleteModal
            deleteArticle={deleteArticle}
            elementToDeleteData={elementToDeleteData}
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
  articleValues: state.editArticleModal.articleItem,

  loadingDeleteModal: state.deleteArticleModal.isLoading,
  errorDeleteModal: state.deleteArticleModal.isError,
  visibleDeleteModal: state.deleteArticleModal.modalVisible,
  elementToDeleteData: state.deleteArticleModal.deleteItem
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
    getArticleData: (id) => {
      dispatch(getDataArticleThunk(id))
    },
    editArticleData: (id, article) => {
      dispatch(editArticleThunk(id, article));
    },
    getArticleForDelete: (id) => {
      dispatch(getArticleForDeleteThunk(id));
    },
    deleteArticle: (id) => {
      dispatch(deleteArticleThunk(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
