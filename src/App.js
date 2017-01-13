import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import LoginForm from './components/LoginForm'

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDVXJyXz0Yfeso5vm37duYLUolFz9ZQv7k",
      authDomain: "manager-c835a.firebaseapp.com",
      databaseURL: "https://manager-c835a.firebaseio.com",
      storageBucket: "manager-c835a.appspot.com",
      messagingSenderId: "578428765193"
    };

    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
