import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

// class SocialProfile extends Component {
//     render() {
//         const { image, link } = this.props.socialProfile;

//         return (
//             <div style={{ display: 'inline-block' }}>
//                 <a href={link} target="_blank"><img src={image} alt="socialProfile" style={{ width: 50, height: 50, margin: 10 }} /></a>
//             </div>        
//         );
//     };
// };

// class SocialProfiles extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Connect with me!</h2>
//                 <div>
//                     {
//                         SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
//                             return (
//                                 <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
//                             );
//                         })
//                     }
//                 </div>
//             </div>
//         );
//     };
// };

const SocialProfile = props => {
    const { image, link } = props.socialProfile;

    return (
        <div style={{ display: 'inline-block' }}>
            <a href={link} target="_blank"><img src={image} alt="socialProfile" style={{ width: 50, height: 50, margin: 10 }} /></a>
        </div>        
    );
};

const SocialProfiles = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                    return (
                        <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                    );
                })
            }
        </div>
    </div>
);
 
export default SocialProfiles;