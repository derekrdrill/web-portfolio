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
            <div className="mt-5">
                <h2 className="mb-4">Music Master</h2>
                <p>This app utilizes the Spotify API to search artists based on what is entered below.</p>
                <p>A successful search will return the following: an image of the artist, their follower count, related genres, and an origanized array of Spotify's top songs for you to preview!</p>
                {/* <ol>
                    <li>an image of the artist</li>
                    <li>follower count</li>
                    <li>genres & </li>
                    <li>an origanized array of Spotify's top songs for you to preview!</li>
                </ol> */}
                <p>Enjoy!</p>
                <Search searchArtist={this.searchArtist}/>
                <Artist artist={this.state.artist} />
                <hr />
                <Tracks tracks={this.state.tracks}/>
            </div>
        );
    };
};

export default App;
