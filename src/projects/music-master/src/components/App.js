import React, { Component } from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './TopTracks';

const SPOTIFY_API = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
    state = { artist: null, tracks: [] };

    searchArtist = artistQuery => {
        fetch(`${SPOTIFY_API}/artist/${artistQuery}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);

                if (json.artists.total > 0) {
                    const artist = json.artists.items[0];

                    this.setState({ artist });

                    fetch(`${SPOTIFY_API}/artist/${artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json => this.setState({ tracks: json.tracks }))
                        .catch(error => alert(error.message));
                }
            })
            .catch(error => alert(error.message));
    };

    render() {
        return (
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist}/>
                <Artist artist={this.state.artist} />
                <hr />
                <Tracks tracks={this.state.tracks}/>
            </div>
        );
    };
};

export default App;
