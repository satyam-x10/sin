"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <div className="bg-gray-900 p-4 text-white">
      <div className=" mx-auto flex items-center justify-between">
        <Link className="text-2xl font-bold" href="#">
          SINNER
        </Link>

        <div className="flex items-center space-x-4 border border-white rounded-md">
          <Link href="/upload">
            <Button variant="outline">Add my SIN</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
