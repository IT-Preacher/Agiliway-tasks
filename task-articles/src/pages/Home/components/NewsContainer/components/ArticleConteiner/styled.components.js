import styled from "styled-components";

export const ArticleContainer = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 20px;

  header {
    height: 150px;
    width: 100%;
    padding: 15px;
    width: 100%;
    background-size: cover;
    color: #fff;

    h4 {
      text-transform: uppercase;
      margin: 0;
      color: #fff;
    }
  }

  .article-body {
    padding: 15px;
    background-color: #fff;
    width: 100%;
    flex-grow: 1;

    .article-date {
      font-size: 11px;
      font-weight: 600;
      color: grey;
    }

    p {
      text-align: initial;
    }

    .article-title {
    }

    .article-content {
      padding-bottom: 40px;
      font-size: 13px;
      line-height: 1.8;
    }
  }

  footer {
    height: 30px;
    margin: 10px;

    a {
        &:hover {
            font-size: 20px;
        }
    }
  }
`;
