import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import "./Articles.scss";

//Components
import { Spin } from "antd";
import getArticlesThunk from "../../pages/Domains/thunks/getArticlesThunk";
import ArticleItem from "./ArticleItem.js";
import ArticleAddModal from "../Domains/ArticleAddModal";
import ArticleEditModal from "../Domains/ArticleEditModal";
import ArticleDeleteModal from "../Domains/ArticleDeleteModal";

//Selectors
import {
  selectArticleData,
  selectArticleLoading,
  selectArticleError,
} from "../Domains/reducers/getArticles-selectors";

import {
  selectModalType,
  selectModalLoading,
  selectModalData,
  selectModalId,
} from "../Domains/reducers/modal-select";

//Actions
import {
  addModalOpenAction,
  editModalOpenAction,
  deleteModalOpenAction,
  modalFunctionCloseAction,
  deleteModalStartSagaAction,
  addModalStartSagaAction,
  editModalStartSagaAction,
} from "../Domains/actions/modalAction";

import { ADD_MODAL_OPEN, EDIT_MODAL_OPEN, DELETE_MODAL_OPEN } from "./consts";

//Thunks
import {
  getDataArticleThunk,
  editArticleThunk,
} from "../Domains/thunks/editArticleThunk";
import { deleteArticleThunk } from "../Domains/thunks/deleteArticleThunk";
import { addArticleThunk } from "../Domains/thunks/addArticleThunk";

//Saga
import { articlesFetchStartSaga } from "../Domains/actions/getArticlesAction";

class Articles extends Component {
  componentDidMount() {
    //this.props.getData();
    this.props.getDataSagaStartAction();
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
      deleteModalStartSagaAction,
      editModalStartSagaAction,
      addModalStartSagaAction,
    } = this.props;

    return (
      <div className="articles-page">
        <div className="button-create-container">
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
        <div className="article-content-container">
          {loading ? (
            <Spin style={{ fontSize: 36 }} />
          ) : (
            articlesList.map(article => (
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
        {modalType === ADD_MODAL_OPEN && (
          <ArticleAddModal
            loading={modalLoading}
            visible={true}
            handleCloseModal={modalClose}
            addArticle={addArticle}
            addModalStartSagaAction={addModalStartSagaAction}
          />
        )}
        {modalType === EDIT_MODAL_OPEN && (
          <ArticleEditModal
            loading={modalLoading}
            visible={true}
            values={modalData}
            handleCloseModal={modalClose}
            editArticleData={editArticleData}
            editModalStartSagaAction={editModalStartSagaAction}
          />
        )}
        {modalType === DELETE_MODAL_OPEN && (
          <ArticleDeleteModal
            loading={modalLoading}
            values={modalData}
            visible={true}
            deleteArticle={deleteArticle}
            handleCloseModal={modalClose}
            deleteModalStartSagaAction={deleteModalStartSagaAction}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articlesList: selectArticleData(state),
  loading: selectArticleLoading(state),
  error: selectArticleError(state),

  modalLoading: selectModalLoading(state),
  modalData: selectModalData(state),
  modalType: selectModalType(state),
  itemId: selectModalId(state),
});

const mapDispatchToProps = {
  getData: getArticlesThunk,

  getDataSagaStartAction: articlesFetchStartSaga,

  addModalOpen: addModalOpenAction,
  editModalOpen: editModalOpenAction,
  deleteModalOpen: deleteModalOpenAction,
  modalClose: modalFunctionCloseAction,

  getArticleData: getDataArticleThunk,
  editArticleData: editArticleThunk,
  deleteArticle: deleteArticleThunk,
  addArticle: addArticleThunk,

  deleteModalStartSagaAction: deleteModalStartSagaAction,
  addModalStartSagaAction: addModalStartSagaAction,
  editModalStartSagaAction: editModalStartSagaAction,
};

Articles.propTypes = {
  articlesList: propTypes.array,
  loading: propTypes.bool,
  error: propTypes.string,

  modalLoading: propTypes.bool,
  modalData: propTypes.object,
  modalType: propTypes.string,
  itemId: propTypes.string,

  getData: propTypes.func,
  addModalOpen: propTypes.func,
  editModalOpen: propTypes.func,
  deleteModalOpen: propTypes.func,
  modalClose: propTypes.func,
  getArticleData: propTypes.func,
  editArticleData: propTypes.func,
  deleteArticle: propTypes.func,
  addArticle: propTypes.func,

  getDataSagaStartAction: propTypes.func,
  deleteModalStartSagaAction: propTypes.func,
  addModalStartSagaAction: propTypes.func,
  editModalStartSagaAction: propTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
