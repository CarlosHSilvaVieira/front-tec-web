import styled from "styled-components";
import theme from './theme';

export const PageContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  @media screen and (max-width: ${theme.size.mobileL} ) {
    flex-flow: column;
    & > div {
      max-width: 100%;
    }
  }
`;

export const PageContent = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
`;

export const PageSideBarContent = styled.div`
  display: flex;
  flex-flow: row;
`;

export const Title = styled.h2``;