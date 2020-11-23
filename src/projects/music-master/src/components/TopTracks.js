import React, { Component } from 'react';

class Tracks extends Component {
    state = { playing: false, audio: null, playingPreviewUrl: null };

    playAudio = url => () => {
        const audio = new Audio(url);

        if (url) {
            if (!this.state.playing) {
                audio.play();
                this.setState({ playing: true, audio, playingPreviewUrl: url });
            }
            else {
                this.state.audio.pause();
    
                if (this.state.playingPreviewUrl === url) {
                    this.setState({ playing: false });
                }
                else {
                    audio.play();
                    this.setState({ audio, playingPreviewUrl: url });
                }
            }
        }
    };

    trackIcon = track => {
        if (!track.preview_url) {
            return <span>N/A</span>;
        }
        else {
            if (this.state.playing && this.state.playingPreviewUrl === track.preview_url) {
                return <span>&#11036;</span>;                
            }
        }

        return <span>&#9654;</span>;
    }

    render() {
        const { tracks } = this.props;

        if (tracks.length < 1) return null;

        return (
            <div>
                <h3>Top Tracks!!</h3>
                <br />
                <div className="row mx-1">
                    {
                        tracks.map(track => {
                            const { id, album, name, preview_url, external_urls } = track;

                            return (
                                <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 track" >
                                    <div className="track-hover" onClick={this.playAudio(preview_url)}>
                                        <img 
                                            className="track-image" 
                                            src={album.images[0].url} 
                                            alt="track" 
                                        />
                                        <p className="track-icon">{this.trackIcon(track)}</p>
                                    </div>
                                    <div className="track-text">
                                        <div className="row">
                                            <div className="col-10 col-sm-9">
                                                <h6 className="col-12 py-2">{name}</h6>
                                            </div>
                                            <div className="col-1 col-md-2 mt-2">
                                                <a href={external_urls.spotify} target="_blank" title="Open song in Spotify"><i className="fab fa-spotify"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
};

export default Tracks;