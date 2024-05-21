import React from 'react';
import { useParams } from 'react-router-dom';

const DevCard = ({creProjects, devProjects, desProjects}) => {
  const { type, projectId } = useParams();

  let projects;
  switch (type) {
    case 'cre':
      projects = creProjects;
      break;
    case 'dev':
      projects = devProjects;
      break;
    case 'des':
      projects = desProjects;
      break;
    default:
      projects = [];
      break;
  }

  console.log(devProjects)
  const project = projects.find((proj) => proj.id === parseInt(projectId, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={`dev-card ${type}`}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="developer-video-container">
        <video className="developer-project-video" src={project.videoUrl} controls></video>
      </div>
      <a className="developer-github-link" href={project.githubUrl}>GitHub</a>
    </div>
  );
};

export default DevCard;


// import React, { useContext, useState } from 'react';
// import { UserContext } from '../context/UserContext.js';
// import { ForumContext } from '../context/ForumContext.js';
// import { useParams } from 'react-router-dom';
// // import CommentForm from '../CommentForm.js';

// const GoodPage = ({ good }) => {
//   // const { user, setUser } = useContext(UserContext);
//   const { allGoods } = useContext(ForumContext);

//   const { id } = useParams();
//   const selectedGood = allGoods.find((good) => good.id === parseInt(id));

//   // const [showCommentForm, setShowCommentForm] = useState(false);

//   if (!selectedGood) {
//     return <div>Loading...</div>;
//   }


//   return (
//     <div className="full-height-page">
//       <div className="full-width-page">
//         <h1 className="pageTitle">{selectedGood.name}</h1>
//         <p className="pageDescription">Description: {selectedGood.description}</p>
//         <img className='thumbImg' src={selectedGood.image} alt="Free Stuff" />
//       </div>
//     </div>  
//   );
// };

// export default GoodPage;