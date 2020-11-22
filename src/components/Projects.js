import React from 'react';
import PROJECTS from '../data/projects';

// class Project extends Component {
//     render() {
//         const { title, image, desc, link } = this.props.project;

//         return (
//             <div className="col-12 col-sm-4">
//                 <a href={link} target="_blank">
//                     <h3>{title}</h3>
//                     <img className="col-12" src={image} alt="profile" />
//                 </a>
//             </div>        
//         )
//     }
// }

// class Projects extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Highlighted Projects!</h2>
//                 <br />
//                 <div className="row">
//                     {
//                         PROJECTS.map(PROJECT => {
//                             return (
//                                 <Project key={PROJECT.id} project={PROJECT} />
//                             );
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

const Project = props => {
    const { title, image, desc, link } = props.project;

    return (
        <div className="col-12 col-sm-4">
            <a href={link} target="_blank">
                <h3>{title}</h3>
                <img className="col-12" src={image} alt="profile" />
            </a>
        </div>        
    );
};

const Projects = () => (
    <div>
        <h2>Highlighted Projects!</h2>
        <br />
        <div className="row">
            {
                PROJECTS.map(PROJECT => {
                    return (
                        <Project key={PROJECT.id} project={PROJECT} />
                    );
                })
            }
        </div>
    </div>
);

export default Projects;