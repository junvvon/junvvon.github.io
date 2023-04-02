import React from "react";
import { GatsbyBrowser } from "gatsby";

import Layout from "../components/Layout";

const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export default wrapPageElement;
