import React from 'react';
import classes from './Person.css';

const person = (props) => {
	return (
		<div className={classes.Person}>
		<h2 onClick={props.click}> I'm {props.name}</h2>
		<h3> I'm {props.age}</h3>
		<div>{props.children}</div>
		<input type="text" onChange={props.changed} value={props.name}/>
		</div>
	);
}

export default person;