const Period = ({
  timeFrom,
  timeTo,
}: {
  timeFrom: string;
  timeTo?: string;
}) => {
  const timeFormatter = (time?: string) =>
    time ? `${time.split('-')[0]}. ${time.split('-')[1]}` : '';

  return (
    <span>
      <time dateTime={timeFrom}>{timeFormatter(timeFrom)}</time>
      {' ~ '}
      <time dateTime={timeTo}>{timeFormatter(timeTo)}</time>
    </span>
  );
};

export default Period;
