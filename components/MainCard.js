import styled from "styled-components";
import { sm, md, lg, xl } from "../constants/breakpoints";
import { exosphere } from "../constants/zIndices";

const CardContent = styled.div`
  text-align: center;
  font-family: "Space Mono", monospace;
  font-size: 1rem;
  font-weight: bold;

  background: #17141d;
  box-shadow: -1rem 0 3rem #000;
  color: white;

  border-radius: 8px;
  padding: 16px;

  position: relative;
  z-index: ${exosphere};

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  /* properties that can change depending on screen size */
  @media (${sm}) {
    padding: 32px;
    font-size: 1rem;
  }

  @media (${md}) {
    padding: 64px;
    font-size: 1.5rem;
  }

  @media (${lg}) {
    padding: 128px;
  }
`;

const CardContainer = styled.div`
  padding: 40px 40px 8px 40px;

  @media (${sm}) {
    padding: 64px 64px 8px 64px;
  }

  @media (${md}) {
    padding: 128px 128px 24px 128px;
  }

  @media (${lg}) {
    padding: 256px 256px 32px 256px;
  }

  @media (${xl}) {
    padding: 256px 256px 40px 256px;
  }
`;

export default function MainCard({ children }) {
  return (
    <CardContainer>
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
}
