import React, { useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    courseCode: "CSA2001",
    Name: "Fundamental in AI and ML",
  },
  {
    courseCode: "MAT1001",
    Name: "Calculas and laplace",
  },
  {
    courseCode: "CSE2001",
    Name: "Object Oriented Programming With C++",
  },
  {
    courseCode: "CSE2002",
    Name: "Data Structures and Algorithms",
  },
  {
    courseCode: "CSE2003",
    Name: "Computer Architecture and Organization",
  },
  {
    courseCode: "CSE3001",
    Name: "Database Management Systems",
  },
];

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black m-2 p-2 rounded-md">
      <h3 className="text-xl font-bold mb-2">{title[0] +": " +title[1]}</h3>
      <button
        className="bg-blue-200 rounded-md p-1"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <div className="flex gap-5"><Link to={"tee/"+  title[0]}>{desc[0]}</Link>  <Link to={"mid/" + title[0]}>{desc[1]}</Link>  </div> }
    </div>
  );
};

const PreviousYearPaper = () => {
  const [visibleSection, setIsVisibleSection] = useState(null);
  return (
    <>
      <h1 className="font-bold text-2xl m-3">Previous Year Paper</h1>
      {courses.map((item) => {
        return (
          <Section
            title={ [item.courseCode, item.Name]}
            desc={["Term End", "Mid Term"]}
            isVisible={visibleSection === item.courseCode}
            setIsVisible={() =>
              setIsVisibleSection(visibleSection !== item.courseCode ? item.courseCode : null)
            }
          />
        );
      })}
    </>
  );
};

export default PreviousYearPaper;
