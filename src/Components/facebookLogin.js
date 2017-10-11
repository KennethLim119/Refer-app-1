import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';

 class FacebookLogin extends Component {
  handleResponse = (data) => {
    console.log(data);
  }

  handleError = (error) => {
    this.setState({ error });
  }

  render() {
    return (
      <FacebookProvider appId="1968266773388528">
        <Login
          scope="email"
          onResponse={this.handleResponse}
          onError={this.handleError}
        >
          <button>Login via Facebook</button>
        </Login>
      </FacebookProvider>
    );
  }
}

export default FacebookLogin;
