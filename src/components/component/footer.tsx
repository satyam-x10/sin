import React from "react";
import Link from "next/link";
const Footerbar = () => {
  return (
    <div className="bg-gray-900 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between ">
        <p className="text-gray-500 mx-4">
          Don't reveal yourself for own safety. U r anonymous.
        </p>
        <div className="flex items-center space-x-4 mr-20">                
          <a target="none" className="hover:underline" href="https://satyam-x10.github.io/portfolio/">
            Developer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footerbar;
