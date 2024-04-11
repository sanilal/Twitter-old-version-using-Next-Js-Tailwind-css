import Image from "next/image";
import SideBarMenuItem from "./SideBarMenuItem";
import { HomeIcon } from '@heroicons/react/solid';
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon } from '@heroicons/react/outline';

export default function SideBar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-center fixed h-full" >
        {/* Twitter logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image  
            src="/twitter-logo.webp" 
            width={96}  
            height={96}  
            alt="Twitter logo"
        />
        </div>
        

        

        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start">
            <SideBarMenuItem text="Home" Icon={HomeIcon} active />
            <SideBarMenuItem text="Explore" Icon={HashtagIcon} />
            <SideBarMenuItem text="Notifications" Icon={BellIcon} />
            <SideBarMenuItem text="Messages" Icon={InboxIcon} />
            <SideBarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SideBarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SideBarMenuItem text="Profile" Icon={UserIcon} />
            <SideBarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
            
        </div>

        {/* Button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

        {/* Mini Profile */}
    <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
      <img src="https://assets.about.me/background/users/s/a/n/sanilal_1523109859_594.jpg" alt=" user image" className=" h-10 w-10 rounded-full xl:mr-2" />
      <div className="leading-5 hidden xl:inline">
        <h4 className="font-bold">Sanilal</h4>
        <p className="text-gray-500">@sandev</p>
      </div>
      <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
    </div>
    </div>
  )
}
