import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            palindrome: '',
            userInput: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({userInput: e.target.value});
    }

    checkPalindrome(userInput) {
        let palindromeStr = userInput;
        let reversedPalindromeStr = userInput;
        reversedPalindromeStr = reversedPalindromeStr.split('');
        reversedPalindromeStr = reversedPalindromeStr.reverse('');
        reversedPalindromeStr = reversedPalindromeStr.join('');
        
        if (palindromeStr === reversedPalindromeStr) {
            this.setState({palindrome: 'true'});
        } else {
            this.setState({palindrome: 'false'});
        }
    }

    render() {
        return (
            <div className="puzzleBox palindromePB"> 
                <h4>Palindrome Component</h4>
                <input className="inputLine" onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={ () => this.checkPalindrome(this.state.userInput)} > Check</button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }
}