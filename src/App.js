import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TeamList from './TeamList.js';
import AddPlayer from './AddPlayer.js';

class App extends Component {

  constructor(){
    super();

    this.state = {
      team1: ['jack', 'peter', 'Loren'],
      team2: ['steven', 'josh', 'paul', 'Barry'],
      selectedTeam: 1,
      userInput: ''
    }

    this.addPlayer = this.addPlayer.bind(this);
    this.updateUserInput = this.updateUserInput.bind(this);
  }

  updateUserInput(val){
    this.setState({
      userInput: val
    })
  }

  addPlayer(){
    var newPlayer = this.state.userInput;
    var {selectedTeam} = this.state;
    if (selectedTeam === 1){
      var newRoster = this.state.team1.slice();
      newRoster.push(newPlayer);
      this.setState({
        team1: newRoster
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="buttons">
          <button>T1</button>
          <button>T2</button>
        </div>

      <AddPlayer add={ this.addPlayer }
                 updateInput={ this.updateUserInput }/>

      <div className='lists'>
        <TeamList teamRoster={ this.state.team1 } />
        <TeamList teamRoster={ this.state.team2 } idName='bob'/>
      </div>
      </div>
    );
  }
}

export default App;
