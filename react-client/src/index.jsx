import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.png';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  };

  handleSubmit (event) {
    console.log('Your Culinary Experience is' + this.state.value);
      // default function than when triggered it will not execute the method
      event.preventDefault();

  };

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src= "https://i.imgur.com/NzCGuaK.png" className="App-logo" alt="logo" />
          <p>Deliver Our Services, Our Chefs to your house for any ocassions or even simple gathering!</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type ="text" value ={this.state.value} onChange ={this.handleChange}/>
                </label>
              <input type="submit" value="Your Cuisine"/>
          </form>
        </header>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));