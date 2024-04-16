import { useState } from "react";
import News from "./News";

export default function NewsResults({ newsResponses, randomUsers }) {
  const [articleNumber, setArticleNumber] = useState(3)
  const [randomUserNum, setRandomUserNum] = useState(3)
 // console.log(newsResponses); // Check if newsResponses is defined and contains the expected data
  return (
    <div className="">
      <div className="text-gray-700 space-y-3 rounded-xl pt-2 w-[90%] bg-white mt-4 mb-8 ">
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
    <div className="text-gray-700 space-y-3 rounded-xl pt-2 w-[90%] bg-white mt-4 mb-8 sticky top-16">
      <h4 className="font-bold text-xl px-4">Who to Follow</h4>
      {randomUsers?.results.slice(0,randomUserNum).map((result, index)=> (
        <div key={index} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
          <img className="rounded-full" width="" src={result.picture.thumbnail} alt="" />
          <div className="truncate ml-4 leading-5">
            <h4 className="font-bold hover:underline text-[14px] truncate">{result.login.username}</h4>
            <h5 className="text-[13px] text-gray-500 truncate">{result.name.first + " " + result.name.last}</h5>
          </div>
          <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">Follow</button>
        </div>
      ))}

      <button onClick={()=>setRandomUserNum(randomUserNum + 3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show More</button>
    </div>
    </div>
    
  );
}
