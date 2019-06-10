import React, { Component } from 'react'
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/Login/Login';

const WrappedComponent = withAuthenticate(PostsPage)(Login);
class App extends Component {
  render() {
    return (
      <WrappedComponent />
    );
  }
}

export default App;
