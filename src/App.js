import React, { Component } from 'react';
import { Route } from 'react-router';

import Layouts from './app/components/Layouts';
import Home from './app/components/Home';
import FetchData from './app/components/FetchData';
import Counter from './app/components/Counter';

class App extends Component {
  render() {
    return (
      <Layouts>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
      </Layouts>
    );
  }
}

export default App;
