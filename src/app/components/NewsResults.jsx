import { useState } from "react";
import News from "./News";

export default function NewsResults({ newsResponses }) {
  const [articleNumber, setArticleNumber] = useState(3)
 // console.log(newsResponses); // Check if newsResponses is defined and contains the expected data
  return (
    <div className="text-gray-700 space-y-3 rounded-xl pt-2 w-[90%] ">
        <h4 className="font-bold text-xl px-4">What's Happening</h4>
      {/* Map through newsResponses.articles and render each article */}
      {newsResponses?.articles.slice(0,articleNumber).map((article, index) => (
        <div key={index}>
          <News article={article}/>
          {/* Add additional article details as needed */}
        </div>
      ))}
      <button onClick={()=>setArticleNumber(articleNumber + 3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show More</button>
    </div>
  );
}
