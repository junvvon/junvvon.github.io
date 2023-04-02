import React from "react";

import { SVGProps } from "./SVG.type";
import { StyledSVG } from "./SVG.style";

const SVG = ({ width, height, children, fill, viewBox }: SVGProps) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    viewBox={viewBox}
  >
    {children}
  </StyledSVG>
);

export default SVG;
