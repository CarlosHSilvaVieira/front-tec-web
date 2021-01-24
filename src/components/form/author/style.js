import styled from "styled-components";

export const FormContainer = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-flow: column;
`;

export const FormRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 1em 1em;

  & > div {
    margin: 1em 1em 0em 0em;
  }
`;
