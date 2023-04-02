import React from "react";

const OutLink = ({ label, link }: { label: string; link: string }) => (
  <a href={link} target="_blank" rel="noreferrer" aria-label={label}>
    {label}
  </a>
);

export default OutLink;
