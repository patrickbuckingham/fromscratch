import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store/index.js';

import BugCounter from '../bugcounter/bugcounter.js';
import BugButton from '../bugbutton/bugbutton.js';
import Header from '../header/header.js';

const App = function(props) {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <BugButton/>
        <BugCounter/>
      </div>
    </Provider>
  );
}

export default App;
