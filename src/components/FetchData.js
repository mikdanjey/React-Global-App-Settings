import React, { Component } from 'react';

export class FetchData extends Component {

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentWillMount(){
      document.title = "FetchData - Mikdan Tech Solutions";
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
      this.setState({ forecasts: data, loading: false });
    });
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>albumId</th>
            <th>id</th>
            <th>title</th>
            <th>thumbnailUrl</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.id}>
            <td>{forecast.albumId}</td>
              <td>{forecast.id}</td>
              <td>{forecast.title}</td>
              <td><img src={forecast.thumbnailUrl} alt={forecast.title} /></td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
