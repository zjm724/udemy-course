import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.InputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.InputElement.focus();
        this.InputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                <h2 key='i1' onClick={this.props.click}> I'm {this.props.name}</h2>
                <h3 key='i2' > I'm {this.props.age}</h3>
                <div key='i3' >{this.props.children}</div>
                <input
                // ref={(inputEl) => {this.InputElement = inputEl}} 
                ref={this.InputElementRef}
                key='i4' type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);