import styled from "styled-components";

/*WIZARD FORM START*/
export const ConteinerForm = styled.div`
  width: 400px;
  min-height: 500px;
  margin: 0 auto;
  border: 2px solid #c6c6c6;
  border-radius: 13px;
`;
/*WIZARD FORM FINISH*/

/*WIZARD FORM SECOND PAGE START*/
export const SelectConteiner = styled.div`
  text-align: center;
  height: 74px;

  label {
    color: #abadac;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

export const RadioConteiner = styled.div`
  display: flex;
  height: 96px;
  flex-direction: column;
  align-items: center;

  label {
    color: #abadac;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

export const InputDateConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5% auto;

  label {
    color: #abadac;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;
/*WIZARD FORM SECOND PAGE FINISH*/
