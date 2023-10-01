import React from 'react'

const SkillCard = ({bgColor, color, name, sDescriprion, children}) => {
  return (
    <>
      <div id="cardBody" style={{backgroundColor:bgColor, color:color}}>
        <h2>{name}</h2>
        <h5>{sDescriprion}</h5>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default SkillCard;