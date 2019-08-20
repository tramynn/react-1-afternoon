import React, { Component } from 'react';

export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            number1: 0,
            number2: 0
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange1(e) {
        this.setState({number1: parseInt(e.target.value, 10)});
    }

    handleChange2(e) {
        this.setState({number2: parseInt(e.target.value, 10)});
    }

    add(number1, number2) {
        let sum = number1 + number2;
        this.setState({sum: sum});
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" type="number" onChange={this.handleChange1}></input>
                <input className="inputLine" type="number" onChange={this.handleChange2}></input>
                <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2)} > Add </button>
                <span className="resultsBox"> Sum: {this.state.sum} </span>
            </div>
        )
    }
}