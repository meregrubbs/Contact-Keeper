import axios from 'axios';

// This is for private routes! If the user is logged in, there will be a token. If there's a token, put it in the global headers.

// Used in AuthState.js & App.js

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
