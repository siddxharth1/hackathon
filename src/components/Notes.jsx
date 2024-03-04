import React from 'react'
import { Link } from 'react-router-dom';

const courses = [
  {
    courseCode: "CSA2001",
    Name: "Fundamental in AI and ML"
  },
  {
    courseCode: "MAT1001",
    Name: "Calculas and laplace"
  },
  {
    courseCode: "CSE2001",
    Name: "Object Oriented Programming With C++"
  },
  {
    courseCode: "CSE2002",
    Name: "Data Structures and Algorithms"
  },
  {
    courseCode: "CSE2003",
    Name: "Computer Architecture and Organization"
  },
  {
    courseCode: "CSE3001",
    Name: "Database Management Systems"
  }
]

const Notes = () => {
  return (
    <div className='w-fit'>
      {courses.map((item)=>{
        return(
          <Link> <div className='p-4 m-4 shadow-xl rounded-md border border-black'> {item.courseCode}: {item.Name} </div></Link>
        )
      })}
    </div>
  )
}

export default Notes
