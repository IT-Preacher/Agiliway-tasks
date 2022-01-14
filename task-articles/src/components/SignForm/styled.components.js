import styled from "styled-components";

export const ConteinerForm = styled.div`
width: 400px;
min-height: 500px;
padding: 20px;
margin: 0 auto;
border: 2px solid black;
border-radius: 13px;

label span {
    font-weight: bold;
    letter-spacing: 2px;
}

.ant-input {
    box-sizing: border-box;
    margin-top: 5px;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum', "tnum";
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
    border: 2px solid black;
    border-radius: 13px;
    transition: all 0.3s;
}

.sign_form_submit_button {
    margin-top: 20px;
    padding: 0 20px;
    border: 2px solid black;
    border-radius: 9px;
    background-color: #f1f3f9
    font-size: 18px;
}
`;