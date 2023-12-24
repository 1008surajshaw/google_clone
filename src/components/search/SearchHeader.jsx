import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gimg from "../../assets/googlelogo_light_color_272x92dp.png"
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
const SearchHeader = ({searchTerm, setSearch}) => {
    const [searchText,setSearchText] = useState(searchTerm);
    useEffect(() =>{
      setSearchText(searchTerm)
    },[searchTerm])
    const handleSubmit = (e) =>{
      e.preventDefault();

      if(/^[a-zA-z0-9].*/.test(searchText) || /^[a-zA-z0-9]+" ".*/.test(searchText)){
          setSearch(searchText);
      }
    }
  return (
    <div className=''>
       <Link to={'/'}>
        <img src={gimg}
        alt='google img'
        className='p-2 m-2'
        height="30"
        />
       </Link>
        <div className=''>
          <form onSubmit={handleSubmit}>
            <input type='text' value={searchText} onChange={(e) =>setSearchText(e.target.value) }/>
          </form>
          {searchText ? <RxCross2/> : null}
        </div>
        <div className='m-4 relative rounded-full overflow-hidden w-12 h-12 hover:bg-richblack-700 flex justify-center items-center'>
            
            <a href='/'>
            <RxDashboard size={28} />
            </a>
        
        </div>

        <div className='m-4 relative rounded-full overflow-hidden w-12 h-12 hover:bg-richblack-700 flex justify-center items-center'>
        
            <a href='/'>
            <FaUserCircle size={28} />
            </a>
        
        </div>
    </div>
  )
}

export default SearchHeader