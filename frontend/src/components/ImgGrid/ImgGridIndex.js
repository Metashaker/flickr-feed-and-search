import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/Context';

const ImgGridIndex = () => {
  const { getInitialFeed, feed } = useContext(AppContext);

  useEffect(() => {
    getInitialFeed();
  }, []);

  return (
    <ImageGrid>
      {feed?.data?.map((el) => (
        <img
          style={{
            alignSelf: 'center', alignItems: 'center', justifyItems: 'center', justifySelf: 'center',
          }}
          src={el.media.m}
          loading="lazy"
          alt="feed-content"
        />
      ))}
    </ImageGrid>
  );
};

const ImageGrid = styled.div`

width: 100%;
padding:0;
margin: 0;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 15px;

@media(max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 767px) {
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
}
`;

export default ImgGridIndex;
