// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Top from './components/Top/Top'
import Bottom from './components/Bottom/Bottom'


class App extends React.Component {
  state = {
    colour: "black"
  };

  handleOnButtonClicked = () => {
    this.setState({
      colour: "white"
    })
  }
  handleOffButtonClicked = () => {
    this.setState({
      colour: "black"
    })
  }

  render() {
    return (
      <div className="App">
        <Top  bgcolour= {this.state.colour}/>
        <Bottom  handleOnButtonClicked={this.handleOnButtonClicked} handleOffButtonClicked={this.handleOffButtonClicked}/>
      </div>
    )
  }
}

export default App;
