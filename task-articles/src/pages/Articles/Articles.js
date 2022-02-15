import React, { useEffect } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

//Components
import { Button, Empty, Spin } from "antd";
import ArticleItem from "./ArticleItem.js";
import ArticleAddModal from "../Domains/ArticleAddModal";
import ArticleEditModal from "../Domains/ArticleEditModal";
import ArticleDeleteModal from "../Domains/ArticleDeleteModal";
import {
  ArticlePageContainer,
  ButtonCreateContainer,
  ArticleContentContainer,
} from "./styled.components";

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

//Constants
import {
  ADD_MODAL_OPEN,
  EDIT_MODAL_OPEN,
  DELETE_MODAL_OPEN,
} from "./constants";

//Thunks
import {
  getDataArticleThunk,
  editArticleThunk,
} from "../Domains/thunks/editArticleThunk";
import getArticlesThunk from "../../pages/Domains/thunks/getArticlesThunk";
import { deleteArticleThunk } from "../Domains/thunks/deleteArticleThunk";
import { addArticleThunk } from "../Domains/thunks/addArticleThunk";

//Saga
import { articlesFetchStartSaga } from "../Domains/actions/getArticlesAction";

const Articles = (props) => {
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
    getDataSagaStartAction,
  } = props;

  useEffect(() => {
    getDataSagaStartAction();
  }, []);

  console.log("not a function in Articles", typeof editModalStartSagaAction );

  return (
    <ArticlePageContainer>
      <ButtonCreateContainer>
        <button
          onClick={() => {
            console.log("modal open");
            addModalOpen();
          }}
          type="primary"
        >
          Create Article
        </button>
      </ButtonCreateContainer>
      <ArticleContentContainer>
        {loading ? (
          <Spin style={{ fontSize: 36 }} />
        ) : (
          <React.Fragment>
            {articlesList.map((article) => (
              <ArticleItem
                key={article.uuid}
                article={article}
                handleOpenEditModal={editModalOpen}
                handleOpenDeleteModal={deleteModalOpen}
                handleCloseModal={modalClose}
                getArticleData={getArticleData}
              />
            ))}
            {!articlesList.length && (
              <div>
                <Empty
                  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                  imageStyle={{
                    height: 60,
                  }}
                  description={<span>No Data</span>}
                />
              </div>
            )}
          </React.Fragment>
        )}
      </ArticleContentContainer>
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
    </ArticlePageContainer>
  );
};

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