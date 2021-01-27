import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const HeaderIndex = () => (
  <HeaderContainer>
    <HeaderTitle>Flickr feed and search</HeaderTitle>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
${tw`
w-screen
bg-gray-200
flex
flex-row
items-center
justify-center
`}
overflow: hidden;
height: 12vh;

`;

const HeaderTitle = styled.h1`
font-size: 36px;
//up until ipad pro
@media (max-width: 1023px) {
  font-size: 24px;
}
`;
export default HeaderIndex;
