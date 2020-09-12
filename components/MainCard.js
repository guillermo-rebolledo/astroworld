import styled from "styled-components";
import { sm, md, lg, xl } from "../constants/breakpoints";

const CardContent = styled.div`
  text-align: center;
  font-family: "Space Mono", monospace;
  font-weight: bold;

  background: linear-gradient(135deg, #5b247a 0%, #1bcedf 100%);
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
    padding: 32px;
    font-size: 14px;
  }

  @media (${md}) {
    padding: 64px;
    font-size: 18px;
  }

  @media (${lg}) {
    padding: 128px;
    font-size: 24px;
  }

  @media (${xl}) {
    padding: 256px;
    font-size: 24px;
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
