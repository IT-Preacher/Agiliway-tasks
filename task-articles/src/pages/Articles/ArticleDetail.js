import React, { useEffect } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

//Components
import { Link, useParams } from "react-router-dom";
import { Spin } from "antd";

//Thunks
import getArticleThunk from "../Domains/thunks/getArticleThunk";

//Sagas
import { articleFetchStartSaga } from "../Domains/actions/getArticleAction";

//Selectors
import {
  selectArticleItem,
  selectArticleLoading,
  selectArticleError,
} from "../Domains/reducers/getArticle-selectors";

import "./ArticleDetail.scss";

const ArticleDetail = (props) => {
  const { articleItem, loading } = props;

  useEffect(() => {
    const { id } = useParams();
    //this.props.getDataItem(id); //Thunk
    props.getDataItemAction(id);
  }, []);

  return (
    <div className="article-detail-page">
      {loading && <Spin />}
      {!loading && (
        <div className="article-container">
          <div className="detail-container">
            <div className="article-card-header">
              <h2 className="white">{articleItem.name}</h2>
            </div>
            <div className="article-card-main">
              <p>{articleItem.description}</p>
              <div className="article-card-footer">
                <span>{articleItem.author}</span>
              </div>
            </div>
            <div className="article-card-footer">
              <span>Publication date: {articleItem.createDate}</span>
              <button className="button-back">
                <Link to="/articles">Back</Link>
              </button>
            </div>
          </div>
          {/* <img src={cardImg} /> */}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  articleItem: selectArticleItem(state),
  loading: selectArticleLoading(state),
  error: selectArticleError(state),
});

const mapDispatchToProps = {
  getDataItem: getArticleThunk,
  getDataItemAction: articleFetchStartSaga,
};

ArticleDetail.propTypes = {
  articleItem: propTypes.object,
  loading: propTypes.bool,
  error: propTypes.string,
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }),

  getDataItem: propTypes.func,
  getDataItemAction: propTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
