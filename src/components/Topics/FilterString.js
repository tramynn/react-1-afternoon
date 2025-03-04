import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            names: ['Tramy', 'Samantha', 'Michael', 'Tommy', 'Ken', 'Linh', 'Mary'],
            userInput: '',
            filteredNames: []
        };

        // this.handleChange = this.handleChange.bind();
    }
    

    handleChange(val) {
        this.setState({userInput: val});
    }

    filterNames(userInput) {
        let name = this.state.names;
        let filteredNames = [];

        for (let i = 0; i < name.length; i++) {
            if (name[i].includes(userInput)) {
                filteredNames.push(name[i]);
            }
        }

        this.setState({ filteredNames: filteredNames });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
            </div>
        )
    }
}