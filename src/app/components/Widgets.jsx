"use client"
import { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import NewsResults from "./NewsResults";

export default function Widgets() {
  const [newsResponses, setNewsResponses] = useState(null);
  const [randomUsers, setRandomUsers] = useState(null)

  useEffect(() => {
    async function getNews() {
      try {
        const res = await fetch(
          "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
       // console.log(data);
        setNewsResponses(data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    }

    getNews();
  }, []); // Run only once when the component mounts

  useEffect(()=>{
    async function getUsers(){
      try {
        const res = await fetch("https://randomuser.me/api/?results=50&inc=name,login,picture");
        if (!res.ok) {
          throw new Error('Could not retrieve users');
        }
        const data = await res.json();
       // console.log(data);
       setRandomUsers(data)
      } catch (error) {
        console.error('Error getting random user data', error);
      }
    }
    getUsers();
  }, [])

 // console.log("News results in Widgets:", newsResponses?.articles);// Check if newsResponses is defined

  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5 bg-gray-100">
      <div className="w-full sticky top-0 py-1.5 z-50 pl-6">
        <div className="flex items-center p-3 rounded-full relative">
          <SearchIcon className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter"
          />
        </div>

        {newsResponses && <NewsResults newsResponses={newsResponses} randomUsers={randomUsers}  />}{" "}
        {/* Render NewsResults only if newsResults is defined */}
      </div>
    </div>
  );
}
