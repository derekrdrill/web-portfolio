import React from 'react';

const Artist = ({ artist }) => {
    if (!artist) return null;

    const { images, name, followers, genres } = artist;

    let followersWithDecimals = (followers.total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div>
            <h3>{name}</h3>
            <p>{followersWithDecimals} followers</p>
            <p>{genres.join(', ')}</p>
            <div className="row">
                <div className="col-12">
                    <img src={images[0] && images[0].url} alt="artist-profile" className="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center artist-profile" />
                </div>
            </div>
        </div>
    );
};

export default Artist;