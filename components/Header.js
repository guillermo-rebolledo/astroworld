import styled from "styled-components";
import { sm, md, lg, xl } from "../constants/breakpoints";
import { exosphere } from "../constants/zIndices";

const Header = styled.h1`
  text-align: center;
  font-family: "Space Mono", monospace;
  font-size: 2rem;
  font-weight: bold;
  color: white;

  position: relative;
  z-index: ${exosphere};

  margin: 4rem 0 0 0;

  @media (${sm}) {
    /* padding: 32px; */
    /* font-size: 14px; */
  }

  @media (${md}) {
    /* padding: 64px; */
    /* font-size: 18px; */
  }

  @media (${lg}) {
    font-size: 4rem;
  }
`;

export default Header;
