import styled from "styled-components";
import { sm, md, lg, xl } from "../constants/breakpoints";
import { exosphere } from "../constants/zIndices";

const CardContent = styled.div`
  text-align: center;
  font-family: "Space Mono", monospace;
  font-weight: bold;

  position: relative;
  z-index: ${exosphere};

  background: #17141d;
  box-shadow: -1rem 0 3rem #000;
  color: white;

  border-radius: 8px;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  /* properties that can change depending on screen size */

  padding: 16px;
  font-size: 12px;

  @media (${sm}) {
    /* padding: 32px; */
    font-size: 14px;
  }

  @media (${md}) {
    /* padding: 64px; */
    font-size: 18px;
  }

  @media (${lg}) {
    /* padding: 128px; */
    font-size: 24px;
  }

  @media (${xl}) {
    /* padding: 256px; */
    font-size: 24px;
  }
`;

export default function SmallCard({ children }) {
  return (
    <CardContainer>
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  padding: 8px 40px 8px 40px;
  display: flex;
  flex-direction: column;

  @media (${sm}) {
    padding: 16px 64px 16px 64px;
  }

  @media (${md}) {
    padding: 24px 128px 24px 128px;
  }

  @media (${lg}) {
    padding: 32px 256px 32px 256px;
  }

  @media (${xl}) {
    padding: 40px 256px 40px 256px;
  }
`;
