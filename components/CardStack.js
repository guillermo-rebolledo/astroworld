import styled from "styled-components";
import { sm, md, lg, xl } from "../constants/breakpoints";
import { exosphere } from "../constants/zIndices";

export const CardList = styled.section`
  font-family: "Inconsolata", monospace;
  padding: 0;
  margin: 0;
  color: white;

  display: flex;
  padding: 3rem;

  overflow: scroll;

  position: relative;
  z-index: ${exosphere};

  @media (${md}) {
    justify-content: center;
  }

  @media (${lg}) {
    overflow: auto;
    justify-content: center;
  }
`;

export const CardAuthor = styled.div`
  font-size: 32px;
`;

export const Card = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 250px;
  min-width: 250px;
  padding: 1.5rem;

  border-radius: 16px;
  background: #17141d;
  box-shadow: -1rem 0 3rem #000;

  transition: 0.2s;

  &:hover {
    transform: translateY(-1rem);
  }

  &:hover ~ & {
    transform: translatex(130px);
  }

  &:not(:first-child) {
    margin-left: -130px;
  }

  @media (${sm}) {
    height: 200px;
  }

  @media (${md}) {
  }

  @media (${lg}) {
    height: 350px;
    width: 400px;
  }

  @media (${xl}) {
  }
`;
