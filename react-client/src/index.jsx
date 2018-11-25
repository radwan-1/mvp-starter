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

    
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange (e) {
    this.setState({value: e.target.value});
    // console.log(e);
  };

  handleSubmit (any) {
    $.ajax({
      type: "POST",
      url: '/cuisine', 
      data: {value: any},
      body: JSON.stringify(data),
      success: () => {
        console.log('delicious!')
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  };

  sendSubmit(e) {
    console.log('handlesubmit with value: ', this.state.value )
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src= "https://i.imgur.com/NzCGuaK.png" className="App-logo" alt="logo"/>
          <p>Deliver Our Services, Our Chefs to your house for any ocassions or even simple gathering!</p>
          <div className='search-area'>
            <div className='codehim-ss-bar'>
              <div className="search-bar form-inline">
                <input className="form-control" type="text" value={this.state.value}
                      onChange={this.handleChange.bind(this)} onSearch = {this.handleSubmit.bind(this)}
                />
                <button type="submit" onClick = {this.sendSubmit.bind(this)} className="codehim-circle-search-button" placeholder="Type Yummy Dish!">
                </button>
              </div>
            </div>
          </div>
        </header> 
      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('app'));