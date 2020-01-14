import React, { Component } from 'react';
import ImageDropDown from './components/ImageDropDown';
import {fruit} from './fruitList.js'

class App extends Component {
    constructor(){
    super()
    this.state = {
      fruitList: fruit,
      selected: fruit[0]
    }
  }

  changeSelected = (item) => {
    this.setState({
      selected: item
    })
  }

  render() {
    return (
      <div className="App">
        <p>Dropdown menu example</p>

        <div className="wrapper">
          <ImageDropDown
            list={this.state.fruitList}
            selected={this.state.selected}
            onChange={this.changeSelected}
          />
        </div>
      </div>
    );
  }
}

export default App;
