import React from 'react'

const ProjectsCard = ({source, bgColor, children}) => {
  return (
    <div>
      <div id="ProjectCard" style={{backgroundColor:bgColor}}>
        <img src={source} alt='Images' />
        <div className='cardChilds'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard;