import React from 'react'
import { FaSortDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Data = ({data}) => {
  return (
    <div>
       <Link to={data.displayLink}>{data.displayLink}</Link>
       <FaSortDown/>
       <div>
         <Link to={data.formattedUrl}>{data.title}</Link>
         <p>{data.snippet}</p>
       </div>
    </div>
  )
}

export default Data