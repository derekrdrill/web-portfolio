import React, { Component } from 'react';

class Search extends Component {
    state = { artistQuery: '' }

    updateArtistQuery = event => {
        this.setState({ artistQuery: event.target.value });
    };

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    };

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    };

    render() {
        return (
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 col-lg-4 offset-1 offset-sm-2 offset-md-3 offset-lg-4">
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search an artist..." 
                            onChange={this.updateArtistQuery} 
                            onKeyPress={this.handleKeyPress} 
                        />   
                        <div className="input-group-append">
                            <button className="btn btn-sm btn-search" onClick={this.searchArtist}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Search;