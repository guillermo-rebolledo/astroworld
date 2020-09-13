import React from "react";
import styled, { keyframes } from "styled-components";
import { troposphere } from "../constants/zIndices";

const Tail = keyframes`
  0% {
    width: 0;
  }

  30% {
    width: 100px;
  }

  100% {
    width: 0;
  }
`;

const Shining = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
`;

const Shooting = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(320px);
  }
`;

const SkyContainer = styled.div`
  width: 100%;
  height: 50px;
  clip-path: circle(50% at 50% 50%);
  border-radius: 50%;
  transform: rotateZ(45deg);
  position: relative;
  z-index: ${troposphere};
`;

const Star = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 2px;
  background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 6px #699bff);
  animation: ${Tail} 3000ms ease-in-out infinite,
    ${Shooting} 3000ms ease-in-out infinite;

  &::before,
  &::after {
    position: absolute;
    content: "";
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(
      -45deg,
      rgba(0, 0, 255, 0),
      #5f91ff,
      rgba(0, 0, 255, 0)
    );
    border-radius: 100%;
    transform: translateX(50%) rotateZ(45deg);
    animation: ${Shining} 3000ms ease-in-out infinite;
  }

  &::after {
    transform: translateX(50%) rotateZ(-45deg);
  }

  &:nth-child(1) {
    top: calc(50% - 200px);
    left: calc(50% - 300px);
    animation-delay: 650ms;
  }
  &:nth-child(1)::before,
  &:nth-child(1)::after {
    animation-delay: 650ms;
  }

  &:nth-child(2) {
    top: calc(50% - -50px);
    left: calc(50% - 190px);
    animation-delay: 150ms;
  }
  &:nth-child(2)::before,
  &:nth-child(2)::after {
    animation-delay: 150ms;
  }

  &:nth-child(3) {
    top: calc(50% - -90px);
    left: calc(50% - 200px);
    animation-delay: 1600ms;
  }
  &:nth-child(3)::before,
  &:nth-child(3)::after {
    animation-delay: 1600ms;
  }

  &:nth-child(4) {
    top: calc(50% - 50px);
    left: calc(50% - 250px);
    animation-delay: 4700ms;
  }
  &:nth-child(4)::before,
  &:nth-child(4)::after {
    animation-delay: 4700ms;
  }

  &:nth-child(5) {
    top: calc(50% - -190px);
    left: calc(50% - 200px);
    animation-delay: 2100ms;
  }
  &:nth-child(5)::before,
  &:nth-child(5)::after {
    animation-delay: 2100ms;
  }
`;

export default function Stars() {
  return (
    <SkyContainer>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </SkyContainer>
  );
}
