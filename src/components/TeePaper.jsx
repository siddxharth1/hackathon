import React from 'react'
import { useLocation } from 'react-router-dom';

const TeePaper = () => {
    const { pathname } = useLocation();
    console.log(pathname)
  return (
    <div>
      h1
    </div>
  )
}

export default TeePaper
