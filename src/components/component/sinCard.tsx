import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaShareAlt } from "react-icons/fa";

const Sincard = ({ sin }: { sin: { Title: string; Desc: string } }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <Card className="rounded-lg">
      <CardContent className="m-1 p-1">
        <div className="flex flex-col items-start gap-2">
          <div className="flex-1 my-2">
            <div className="flex items-center justify-between">
              <h2 className="font-extrabold text-2xl text-gray-400">
                <p>{sin.Title}</p>
              </h2>
            </div>
            <p className="mt-2 mx-4 text-white">
              {showFullText ? sin.Desc : `${sin.Desc.slice(0, 500)}...`}
            </p>
            {!showFullText && (
              <p onClick={toggleFullText} className="text-gray-500 border mt-1 border-white rounded-lg flex float-end hover:cursor-pointer">
                <p className="p-1">Read More</p>
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Sincard;
