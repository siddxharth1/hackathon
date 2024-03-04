import React from 'react'

const Box = (props) => {
  return (
    <div className='border border-black m-2 py-24 shadow-2xl w-96  text-center rounded-2xl'>
        <span className='text-3xl font-bold text-blue-400'>{props.children}</span>
    </div>
  )
}

export default Box
