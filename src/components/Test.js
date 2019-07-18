import React from 'react'

const Test = (props) => {
  return (
    <button>
      <div className='btn btn-block col-3'>{props.display}</div>
     <audio src={props.sound}></audio>
    </button>
  )
}

export default Test
