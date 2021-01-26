import React, { useContext, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import { AppContext } from './context/Context';

function App() {
  const { getInitialFeed, feed } = useContext(AppContext);

  useEffect(() => {
    getInitialFeed();
  }, [feed]);

  return (
    <StyledApp className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
${tw`w-6/12`}
`;

export default App;
