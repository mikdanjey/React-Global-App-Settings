import React, { Component } from 'react';

export default class Home extends Component {

  componentWillMount(){
    document.title = "Home - Mikdan Tech Solutions";
  }
  
  render() {
    return (
      <div>
       <h1>Home Page</h1>
      </div>
    );
  }
}
