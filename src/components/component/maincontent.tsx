/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/DUDYySEfDig
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Judson } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

judson({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client';

import { useState, useEffect } from "react";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import Sincard from "./sinCard";
export function Maincontent() {
  const [isVisible, setIsVisible] = useState(false);

  const [data, setData] = useState<Array<Object>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {        
        const response = await fetch('http://localhost:3000/api/sin');
        const newData = await response.json();
        setData(newData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1 bg-gray-500">
        <div className="mx-auto grid grid-cols-12 p-2">
          <div className="col-span-12 space-y-2">
            {data?.map((item: any, index: number) => (              
             <Sincard key={index} sin={item} />
            ))}
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0 hidden"}`}
        >
          <BiSolidUpArrowCircle size={40} />
        </button>
      </main>
    </div>
  );
}