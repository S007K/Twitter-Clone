import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { PiBookmarkSimpleBold, PiHashBold } from "react-icons/pi";
import { MdOutlineTextsms } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { BiHomeCircle, BiMoney } from 'react-icons/bi';
import { CgMoreO } from 'react-icons/cg';
import { IoNotificationsOutline } from 'react-icons/io5';




interface TwitterSidebarButton{
  title: String;
  icon: React.ReactNode; 
}



const sidebar: React.FC = () => {
    const sidebarMenuItems: TwitterSidebarButton[] = [
        {
          title: 'Home',
          icon: <BiHomeCircle />
        },
        {
          title: 'Explore',
          icon: <PiHashBold/>
        },
        {
          title: 'Notifications',
          icon: <IoNotificationsOutline />
        },
        {
          title: 'Messages',
          icon: <MdOutlineTextsms />
        },
        {
          title: 'Bookmarks',
          icon: <PiBookmarkSimpleBold />
        },
        {
          title: 'Twitter Blue',
          icon: <BiMoney/>
        },
        {
          title: 'Profile',
          icon: <FaUser />
        },
        {
          title: 'More',
          icon: <CgMoreO />
        }
      ]
  return (
    <>
    <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full transition-all p-4 ml-4  cursor-pointer ">
    <BsTwitter />
  </div>
  <div className=" pr-4  text-xl">
      <ul>
        {sidebarMenuItems.map((item) => (
        <li className="flex justify-start items-center gap-5 w-fit mx-4 pl-3  pr-3 py-2  mb-2 rounded-full  hover:bg-gray-800 cursor-pointer">
          <span className='text-2xl'>{item.icon}</span>
          <span>{item.title}</span>
          </li>
        ))}
      </ul>
    <button className=" text-lg font-semibold bg-[#1d9bf0] text-white hover:bg-[#1a8cd8] w-full  ml-3 px-4 py-3 rounded-full">Tweet</button>
  </div>
  </>
  )
}

export default sidebar