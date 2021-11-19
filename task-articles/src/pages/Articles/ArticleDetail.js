import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import getArticleThunk from "../Domains/thunks/getArticleThunk";

class ArticleDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getDataItem(id);
  }

  render() {
    const { articleItem, loading } = this.props;
    console.log("Detail ", this.props);

    return (
      <div className="article-detail-page">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="article-detail-page">
            <div className="detail-conteiner">
              <div className="article-card-header">
                <h2>{articleItem.name}</h2>
              </div>
              <div className="article-card-main">
                <p>{articleItem.description}</p>
                <div className="article-card-footer">
                  <span>{articleItem.author}</span>
                </div>
              </div>
              <div className="article-card-footer">
                <span>{articleItem.createDate}</span>
              </div>
              <button className="button-back">
                <Link to="/articles">Back</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articleItem: state.article.articleItem,
  loading: state.article.loading,
  error: state.article.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDataItem: (id) => {
      dispatch(getArticleThunk(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);