import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line spaced-comment
import './styles/index.css';
import IndexRoute from './pages/index';
import AppProvider from './context/Context';

const AppRouter = () => (

  <AppProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexRoute} exact />
      </Switch>
    </BrowserRouter>
  </AppProvider>
);
export default AppRouter;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
