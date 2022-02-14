import React, { useEffect } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

//Components
import { Spin } from "antd";
import {
  ArticleBigCard,
  ArticleCardImg,
  ArticleCardMain,
  DescriptionParagraph,
  ArticleCardFooter,
  ArticleDetailContainer,
} from "./styled.components";

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

const ArticleDetail = ({ articleItem, loading, getDataItemAction }) => {
  const { name, description, author, createDate } = articleItem;
  const { id } = useParams();

  useEffect(() => {
    //this.props.getDataItem(id); //Thunk
    getDataItemAction(id);
  }, []);

  return (
    <ArticleDetailContainer>
      {loading && <Spin />}
      {!loading && (
        <ArticleBigCard>
          <ArticleCardMain>
            <ArticleCardImg
              src="https://drive.google.com/uc?export=view&id=19pRzEYH6Fu-yGD8zntykKs80OkZeAxDF"
              alt="Photo for article"
            />
            <h2>{name}</h2>
            <DescriptionParagraph>{description}</DescriptionParagraph>
            <span>Author: {author}</span>
          </ArticleCardMain>
          <ArticleCardFooter>
            <span>
              Publication date:{" "}
              {moment(createDate).format("MMMM Do YYYY, h:mm a")}
            </span>
            <button className="button-back">
              <Link to="/articles">Back</Link>
            </button>
          </ArticleCardFooter>
        </ArticleBigCard>
      )}
    </ArticleDetailContainer>
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

// img - https://drive.google.com/file/d/19pRzEYH6Fu-yGD8zntykKs80OkZeAxDF/view?usp=sharing
// https://drive.google.com/uc?export=view&id=19pRzEYH6Fu-yGD8zntykKs80OkZeAxDF
