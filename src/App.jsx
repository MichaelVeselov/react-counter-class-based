import './App.css';

import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.counter };
  }

  handleIncrement = () => {
    this.state.counter >= 50
      ? this.setState((state) => ({
          counter: state.counter,
        }))
      : this.setState((state) => ({
          counter: state.counter + 1,
        }));
  };

  handleDecrement = () => {
    this.state.counter <= -50
      ? this.setState((state) => ({
          counter: state.counter,
        }))
      : this.setState((state) => ({
          counter: state.counter - 1,
        }));
  };

  handleRandom = () => {
    const min = -50;
    const max = 50;
    const random = Math.floor(min + Math.random() * (max + 1 - min));
    this.setState((state) => ({ counter: random }));
  };

  handleReset = () => {
    this.setState((state) => ({ counter: this.props.counter }));
  };

  render() {
    return (
      <div className='app'>
        <div className='counter'>{this.state.counter}</div>
        <div className='controls'>
          <button onClick={this.handleIncrement}>INC</button>
          <button onClick={this.handleDecrement}>DEC</button>
          <button onClick={this.handleRandom}>RND</button>
          <button onClick={this.handleReset}>RESET</button>
        </div>
      </div>
    );
  }
}

export default App;
