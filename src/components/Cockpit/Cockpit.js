import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
	const assignedClass = [];

    let btnClass = '';
    if (props.currentPersonsDisplayingState) {
    	btnClass = classes.Red;
	};

    if (props.persons.length <= 2) {
      assignedClass.push( classes.red );
    };

    if (props.persons.length <= 1) {
      assignedClass.push( classes.bold );
    };

	return (
		<div className={classes.Cockpit}>
			<h1>Hi, I'm a React App</h1>
	        <p className={assignedClass.join(' ')}>This is really working</p>
	        <button
	          className={btnClass}
	          onClick={props.clicked}>Toggle Display Persons</button>
        </div>
	);
};

export default cockpit;