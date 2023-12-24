import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { IoMdImages } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
const SearchSubMeader = () => {
  return (
    <div>
       <div>
        <div>
            <ul>
                <li>
                    <Link to={'/'}>
                       <IoIosSearch/>
                       <p>all</p>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                       <IoMdImages/>
                       <p>Image</p>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                       <FaMapMarkerAlt/>
                       <p>map</p>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                       <GoVideo/>
                       <p>videos</p>
                    </Link>
                </li>
               
                <li>
                    <Link to={'/'}>
                       <FaMapMarkerAlt/>
                       <p>news</p>
                    </Link>
                </li>
                
            </ul>
        </div>
       </div>
    </div>
  )
}

export default SearchSubMeader