import styled from "styled-components";

export const ArticlePageContainer = styled.div``;

export const ButtonCreateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;
`;

export const ArticleContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ArticleCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 300px;
  height: 370px;
  padding: 10px 30px 30px 30px;
  min-height: 435px;
  margin: 10px 0 10px 0;
  border: 2px solid black;
  border-radius: 20px;
  background-color: #fff;

  .dropdown-menu-article {
    display: flex;
    justify-content: flex-end;
  }
`;

//ArticleDetail styled
export const ArticleDetailContainer = styled.div`
  min-height: 500px;
`;

export const ArticleBigCard = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  padding: 70px 58px 40px;
  background-color: #fff;
`;

export const ArticleCardImg = styled.img`
  width: 50%;
  height: 350px;
  margin-right: 30px;
  float: left;
`;

export const ArticleCardMain = styled.main``;

export const DescriptionParagraph = styled.p`
  text-align: justify;

  &::first-letter {
    font-size: 3rem;
    float: left;
    margin-right: 10px;
  }

  span {
    margin-left: auto;
  }
`;

export const ArticleCardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;
