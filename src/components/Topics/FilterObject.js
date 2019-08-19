import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            employees: [
                {
                    name: 'Tramy Nguyen',
                    title: 'CEO BOSS WOMAN',
                    age: 24,
                },
                {
                    name: 'Sam Ehlers',
                    age: 23,
                    hairLength: 'short'
                },
                {
                    name: 'Mikey Tinio',
                    title: 'Gamer Guy'
                }
            ],

            filteredEmployees: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    filterEmployees(prop) {
        let employees = this.state.employees; // initialize 
        let filteredEmployees = []; // create an empty array to sort through

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].hasOwnProperty(prop)) {
                filteredEmployees.push(employees[i]);
            } 
        }

        this.setState( {filteredEmployees: filteredEmployees} ); // overriding the data to display the new filtered array
    }
    
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
            </div>
        )
    }
}