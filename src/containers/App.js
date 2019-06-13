import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: "sfsa", name: "Max", age: 28 },
      { id: "sda", name: "Jiemin", age: 28 },
      { id: "safd", name: "Steve", age: 32 }
    ],
    currentPersonsDisplayingState: false,
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsDisplayHandler = () => {
    const toggledDisplay = this.state.currentPersonsDisplayingState;
    this.setState({currentPersonsDisplayingState: !toggledDisplay})
  }




  render() {
    let persons = null;

    if (this.state.currentPersonsDisplayingState) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
        </div>
      );

    }

    return (
      <div className={classes.App}>
        <Cockpit
          currentPersonsDisplayingState={this.state.currentPersonsDisplayingState}
          persons={this.state.persons}
          clicked={this.togglePersonsDisplayHandler} />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!! Is it working now?'));
  }
}

export default App;
