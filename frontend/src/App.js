import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';
import styled from 'styled-components';

function App() {
  return (
    <StyledApp className="App">
      <header className="App-header">

        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </StyledApp>
  );
}

const StyledApp = styled.div`
${tw`w-6/12 bg-gray-300`}
`;

export default App;
