import React from "react";

import WrapPageElement from "./src/app/WrapPageElement";
import WrapRootElement from "./src/app/WrapRootElement";

export const wrapPageElement = WrapPageElement;
export const wrapRootElement = WrapRootElement;
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      as="style"
      crossOrigin="anonymous"
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
      rel="stylesheet"
    />,
    <link
      as="style"
      crossOrigin="anonymous"
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
      rel="stylesheet"
    />,
  ]);
};
