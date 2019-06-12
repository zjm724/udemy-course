import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
    let btnClass = '';

    if (this.state.currentPersonsDisplayingState) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
        </div>
      );

      btnClass = classes.Red;

    }

    let assignedClass = [];
    if (this.state.persons.length <= 2) {
      assignedClass.push( classes.red );
    };

    if (this.state.persons.length <= 1) {
      assignedClass.push( classes.bold );
    };

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClass.join(' ')}>This is really working</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsDisplayHandler}>Toggle Display Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!! Is it working now?'));
  }
}

export default App;
