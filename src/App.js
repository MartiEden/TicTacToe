import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      square: Array(9).fill(null),
      counter: 0
    };
    this.winner_lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [3, 4, 6],
    ];
  }
  isWinner = (value, current_array) => {
    const last_click_value = current_array[value];


    for (let index = 0; index < 8; index++) {
      const winner_line = this.winner_lines[index];

      if (current_array[winner_line[0]] === last_click_value &&
        current_array[winner_line[1]] == last_click_value &&
        current_array[winner_line[2]] === last_click_value) {

        setTimeout(() => {
          alert(last_click_value + " WIN!!!");
          document.querySelectorAll('.item-value').forEach(el=>{if(el.classList.contains('opacity-enabled')){
            el.classList.remove('opacity-enabled');
          }});;
          this.setState({
            square: Array(9).fill(null),
            counter: 0
          })
        }, 500)
      }

    }
  }

  checkEmptyFilelds = current_square_array => {
    let count = 0;
    for (let index = 0; index < current_square_array.length; index++) {
      if (current_square_array[index] === null) {
        count++;
      }
    }
    if (count === 0) {
      setTimeout(() => {
         alert("DRAW !!! Try once again!!!")
        this.setState({
          square: Array(9).fill(null),
          counter: 0
        })
      }, 500)
    }
  }

  clickHandler = event => {

    let current_value = event.target.getAttribute('data');
    let current_square_array = this.state.square;

console.log(event.target);
    if (!current_square_array[current_value]) {
      if (this.state.counter % 2 === 0) {
        event.target.querySelector('.item-value').classList += ' opacity-enabled';
        current_square_array[current_value] = "X"
      } else {
        event.target.querySelector('.item-value').classList += ' opacity-enabled';
        current_square_array[current_value] = "O"
      }
      this.setState({ counter: this.state.counter + 1 })
      this.setState({ square: current_square_array })
    } else {
      alert("You're wrong! Please, fill another field")
    }

    this.isWinner(current_value, current_square_array);
    this.checkEmptyFilelds(current_square_array);
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div className="app-square">
            {
              this.state.square.map((el, index) => <span onClick={this.clickHandler} data={index}
                className="app-square__item" key={`item${index}`}><span className="item-value">{el}</span></span>)
            }
          </div>
        </header>

      </div>
    );
  }
}

export default App;
