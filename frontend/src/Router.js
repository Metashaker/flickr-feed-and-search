import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line spaced-comment
import IndexRoute from './pages/index';
import AppProvider from './context/Context';
import GlobalStyles from './styles/GlobalStyles';
import LayoutIndex from './layout/LayoutIndex';

const AppRouter = () => (

  <AppProvider>
    <GlobalStyles />
    <BrowserRouter>
      <LayoutIndex>
        <Switch>
          <Route path="/" component={IndexRoute} exact />
        </Switch>
      </LayoutIndex>
    </BrowserRouter>
  </AppProvider>
);
export default AppRouter;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
