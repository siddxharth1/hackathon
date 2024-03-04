import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black m-2 p-2">
      <h3 className="text-xl font-bold">{title}</h3>
      
        <button className="bg-blue-200" 
        onClick={()=>{setIsVisible(!isVisible)}}
        >
         {isVisible ?  "Hide" : "Show"}
        </button>
      
      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const PreviousYearPaper = () => {
  const [visibleSection, setIsVisibleSection] = useState(null);
  return (
    <>
      <h1 className='font-bold text-2xl m-3'>Previous Year Paper</h1>
      <Section
        title={"About Instamart"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={()=>setIsVisibleSection((visibleSection !== "about") ? "about" : null)}
      />
    </>
  );
}

export default PreviousYearPaper
