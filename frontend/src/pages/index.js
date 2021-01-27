import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import ImgGridIndex from '../components/ImgGrid/ImgGridIndex';

const IndexRoute = () => (
  <IndexContainer className="App">
    <ImgGridIndex />
  </IndexContainer>
);

const IndexContainer = styled.div`
${tw`w-screen pt-10 `}
`;

export default IndexRoute;
