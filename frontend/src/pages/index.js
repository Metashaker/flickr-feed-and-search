import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import ImgGridIndex from '../components/ImgGrid/ImgGridIndex';
import SearchBarIndex from '../components/SearchBar/SearchBarIndex';

const IndexRoute = () => (
  <IndexContainer>
    <SearchBarIndex />
    <ImgGridIndex />
  </IndexContainer>
);

const IndexContainer = styled.div`
${tw`w-screen pt-10 pb-10 `}
overflow: hidden;
`;

export default IndexRoute;
