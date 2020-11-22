import React, { Component } from 'react';
import Navigation from './Navigation';

const Joke = ({ joke }) => {
    const { setup, punchline } = joke;

    return <p style={{margin:25}}>{setup} <em>{punchline}</em></p>;
}

class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json() )
            .then(json => this.setState({ jokes: json }))
            .catch(error => alert(error.message)); 
    };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json() )
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message));   
    };
    
    render() {
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke} />
                <hr />
                <h3>Want 10 new jokes??</h3>
                <button className="btn btn-success btn-sm" onClick={this.fetchJokes}>Click here!</button>
                {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
            </div>
        );
    };
};

export default Jokes;