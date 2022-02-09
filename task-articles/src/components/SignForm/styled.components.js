import styled from "styled-components";

export const PrimaryFormContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 540px;
  width: fit-content;
  margin: 0 auto;
  background-color: white;
`;
export const FormContainer = styled.div`
  margin: 20px 30px;
  width: 380px;

  label span {
    font-weight: bold;
    letter-spacing: 2px;
    color: grey;
  }

  .ant-input {
    box-sizing: border-box;
    margin-top: 5px;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum", "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 10px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 18px;
    text-align: center;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 2px solid graey;
    border-radius: 13px;
    transition: all 0.3s;
  }

  .error-input {
    border: 2px solid red;
  }
`;

export const CustomButton = styled.button`
  margin: 10px 0;
  padding: 10px 30px;
  border-radius: 9px;
  border-color: #1890ff;
  background: #1890ff;
  color: white;
  font-size: 16px;
`;

export const BannerContainer = styled.div``;

export const Img = styled.img`
  height: 540px;
`;

export const CustomParagraph = styled.p`
  margin: 0;
`;
