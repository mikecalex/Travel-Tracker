import React from 'react'

const Places = (props) => {

  return(
    <div>
      <li onClick={props.handleClick} className={props.classString}>{props.name}</li>
    </div>
  )
}

export default Places
