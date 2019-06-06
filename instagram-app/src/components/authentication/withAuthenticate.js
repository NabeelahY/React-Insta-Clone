import React from "react";

const withAuthenticate = Component => LoginPage => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      return localStorage.getItem("user") === null
        ? this.setState({ loggedIn: false })
        : this.setState({ loggedIn: true });
    }

    render() {
      return this.state.loggedIn ? (
        <Component {...this.props} />
      ) : (
        <LoginPage />
      );
    }
  };
};

export default withAuthenticate;
