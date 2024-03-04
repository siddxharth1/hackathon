import React from "react";
import Box from "./Box";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
      <div className="flex justify-around mt-10">
        <Link to={"/notes"}>
          <Box>Notes</Box>
        </Link>
        <Link to={"/pyp"}>
          <Box>Previous Year Papers</Box>
        </Link>
    </div>
  );
};

export default HomePage;
