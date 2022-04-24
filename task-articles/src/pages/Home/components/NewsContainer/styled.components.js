import styled from "styled-components";

export const StyledNewsConteiner = styled.div`
  .news {
    .news-articles {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @media screen and (max-width: 960px) {
        justify-content: center;
      }
    }
  }
`;

export const StyledHeaderConteiner = styled.header`
  flex-direction: column;
  margin: 15px 0;

  .ant-input-group-wrapper .ant-input-search {
    width: 30%;
  }
`;

export const SettingsContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 20px 0px;
`;

export const RequestSettingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  padding: 20px 0px;
  opacity: ${(props) => (props.visibility ? 1 : 0)};
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
  transition: .55s opacity, .55s visibility;
`;

export const FlexContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const CustomSelect = styled.select`
  position: relative;
  width: 200px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const LoadMore = styled.span`
  display: block;
  margin: 10px;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;
