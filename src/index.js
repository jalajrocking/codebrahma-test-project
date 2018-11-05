import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import CodeBrahmaTestProject from './CodeBrahmaTestProject';
import testReducer from './store/reducer/testReducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(testReducer);

ReactDOM.render(<Provider store={store}><CodeBrahmaTestProject /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
