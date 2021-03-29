import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import{configureStore,combineReducers} from '@reduxjs/toolkit'
import App from './App';

//Reducers
import authReducer from './Controlers/Redux/authSlice'
import bugReducer from './Controlers/Redux/bugSlice'
import userReducer from './Controlers/Redux/userSlice'

//Redux configure
const reducer = combineReducers({
  auth: authReducer,
  bugs: bugReducer,
  user: userReducer,
})

const store = configureStore({
  reducer
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
