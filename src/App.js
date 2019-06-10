import React, { Component } from 'react';

import NavigationService from '~/services/navigation';
import Routes from './routes';

export default class App extends Component {
  registerService = (ref) => {
    NavigationService.setTopLevelNavigator(ref);
  };

  render() {
    return <Routes ref={this.registerService} />;
  }
}
