import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import { connect } from "react-redux";

import getArticleThunk from "../Domains/thunks/getArticleThunk";
import { articleFetchStartSaga } from "../Domains/actions/getArticleAction";
import propTypes from "prop-types";

import {
  selectArticleItem,
  selectArticleLoading,
  selectArticleError,
} from "../Domains/reducers/getArticle-selectors";

import "./ArticleDetail.scss";

class ArticleDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    //this.props.getDataItem(id);
    this.props.getDataItemAction(id);
  }

  render() {
    const { articleItem, loading } = this.props;

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
  }
}

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
export default ArticleDetail;
// export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
