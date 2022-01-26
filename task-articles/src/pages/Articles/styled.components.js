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
