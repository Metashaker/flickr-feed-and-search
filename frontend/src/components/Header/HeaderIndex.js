import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const HeaderIndex = () => (
  <HeaderContainer />
);

const HeaderContainer = styled.div`
${tw`
w-screen
bg-gray-500
`}

height: 12vh;

`;
export default HeaderIndex;
