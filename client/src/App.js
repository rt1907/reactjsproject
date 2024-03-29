import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" }
  }
  
  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div>
        <p className="App-title">{this.state.apiResponse}</p>
       <thead>
        <tr>
          <th>{this.state.apiResponse["volts"]}</th>
          </tr>
          </thead>
      </div>
    );
  }
}

export default App;