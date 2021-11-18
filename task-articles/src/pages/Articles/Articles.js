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
  addModalOpenAction,
  editModalOpenAction,
  deleteModalOpenAction,
  modalFunctionCloseAction,
} from "../Domains/actions/modalAction";

import { ADD_MODAL_OPEN, EDIT_MODAL_OPEN, DELETE_MODAL_OPEN } from "./consts";

import {
  getDataArticleThunk,
  editArticleThunk,
} from "../Domains/thunks/editArticleThunk";
import { deleteArticleThunk } from "../Domains/thunks/deleteArticleThunk";
import { addArticleThunk } from "../Domains/thunks/addArticleThunk";

class Articles extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const {
      articlesList,
      loading,
      deleteModalOpen,
      editModalOpen,
      addModalOpen,
      modalClose,
      modalData,
      modalLoading,
      modalType,
      deleteArticle,
      getArticleData,
      editArticleData,
      addArticle,
    } = this.props;

    return (
      <div className="articles-page">
        <div className="button-create-conteiner">
          <button
            onClick={() => {
              console.log("modal open");
              addModalOpen();
            }}
            type="primary"
          >
            Create Article
          </button>
        </div>
        <div className="article-content-conteiner">
          {loading ? (
            <Spin style={{ fontSize: 36 }} />
          ) : (
            articlesList.map((article, index) => (
              <ArticleItem
                key={article.uuid}
                article={article}
                handleOpenEditModal={editModalOpen}
                handleOpenDeleteModal={deleteModalOpen}
                handleCloseModal={modalClose}
                getArticleData={getArticleData}
              />
            ))
          )}
        </div>
        {modalType == ADD_MODAL_OPEN && (
          <ArticleAddModal
            loading={modalLoading}
            visible={true}
            handleCloseModal={modalClose}
            addArticle={addArticle}
            loading={modalLoading}
          />
        )}
        {modalType == EDIT_MODAL_OPEN && (
          <ArticleEditModal
            loading={modalLoading}
            visible={true}
            values={modalData}
            handleCloseModal={modalClose}
            editArticleData={editArticleData}
          />
        )}
        {modalType == DELETE_MODAL_OPEN && (
          <ArticleDeleteModal
            loading={modalLoading}
            values={modalData}
            visible={true}
            deleteArticle={deleteArticle}
            handleCloseModal={modalClose}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articlesList: state.articles.articlesList,
  loading: state.articles.loading,
  error: state.articles.error,

  modalLoading: state.modal.isLoading,
  modalData: state.modal.data,
  modalType: state.modal.type,
  itemId: state.modal.id,
});

const mapDispatchToProps = {
  getData: getArticlesThunk,
  addModalOpen: addModalOpenAction,
  editModalOpen: editModalOpenAction,
  deleteModalOpen: deleteModalOpenAction,
  modalClose: modalFunctionCloseAction,
  getArticleData: getDataArticleThunk,
  editArticleData: editArticleThunk,
  deleteArticle: deleteArticleThunk,
  addArticle: addArticleThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
