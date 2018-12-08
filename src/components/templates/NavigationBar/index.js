import React, { PureComponent } from 'react';

export const withoutNavigationBar = (WrappedComponent) => {
  return class extends PureComponent {
    static navigationOptions = {
      header: null
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export const withNavigationBar = (WrappedComponent) => {
  return class extends PureComponent {
    static navigationOptions = {

    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
