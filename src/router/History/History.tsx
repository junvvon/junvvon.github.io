import React, { useEffect } from 'react';
import { RouterProps } from '@global/Router.type';

const History: React.FC<RouterProps> = ({ history }) => {
  const handleGoBack = () => {
    history.goBack();
  };

  const handleGoHome = () => {
    history.push('/');
  };

  useEffect(() => {
    const unblock = history.block('정말 떠나실 건가요?');
    return () => {
      if (unblock) {
        unblock();
      }
    };
  });

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default History;
