import React from "react";
import styled from "styled-components";
import icons from "../constants/icons";

const Svg = styled.svg`
  display: inline-block;
  fill: currentColor;
  outline: 0;
  vertical-align: middle;
`;

function Icon({ className, icon, onClick }) {
  const { path, size } = icons[icon];
  return (
    <Svg
      className={className}
      viewBox={`0 0 ${size} ${size}`}
      onClick={onClick}
    >
      <path d={path} />
    </Svg>
  );
}

export default Icon;
