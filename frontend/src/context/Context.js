/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import axios from 'axios';
import { feedEndpoint, tagFeedEndpoint } from '../api/Api';

const defaultValues = {
  getInitialFeed: () => {},
  getTagFeed: () => {},
  setTag: () => {},
  tag: '',
  feed: [],
};

export const AppContext = createContext(defaultValues);

const AppProvider = ({ children }) => {
  const [feed, setFeed] = useState([]);
  const [tag, setTag] = useState('');

  const getInitialFeed = async () => {
    try {
      const feedRes = await axios(feedEndpoint);
      setFeed(feedRes);
    } catch (e) {
      console.error(e);
    }
  };

  const getTagFeed = async () => {
    try {
      const feedRes = await axios(`${tagFeedEndpoint}?tag=${tag}`);
      setFeed(feedRes);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <AppContext.Provider value={{
      getInitialFeed, getTagFeed, setTag, tag, feed,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
