import React from "react";

const Period = ({
  dateFrom,
  dateTo,
}: {
  dateFrom: string;
  dateTo?: string;
}) => {
  const timeFormatter = (time?: string) =>
    time ? `${time.split("-")[0]}. ${time.split("-")[1]}` : "";

  return (
    <span>
      <time dateTime={dateFrom}>{timeFormatter(dateFrom)}</time>
      {" ~ "}
      <time dateTime={dateTo}>{timeFormatter(dateTo)}</time>
    </span>
  );
};

export default Period;
