import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';
import styled from 'styled-components';

const IndexRoute = () => (
  <IndexContainer className="App">
    <p>Its working!</p>
  </IndexContainer>
);

const IndexContainer = styled.div`
${tw`w-screen pt-10 flex flex-row justify-center`}
`;

export default IndexRoute;
