import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/Context';

const ImgGridIndex = () => {
  const { getInitialFeed, feed } = useContext(AppContext);

  useEffect(() => {
    getInitialFeed();
    console.log(feed?.length);
  }, []);

  return (
    <div style={{ width: '100%' }}>{feed?.data?.map((el) => <img src={el.media.m} loading="lazy" alt="feed-content" />)}</div>
  );
};

export default ImgGridIndex;
