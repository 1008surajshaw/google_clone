import React from 'react'
import SearchHeader from './SearchHeader'
import SearchSubMeader from './SearchSubMeader'

const Header = ({searchTerm}) => {
  return (
    <div>
        <SearchHeader searchTerm={searchTerm} />
        <SearchSubMeader/>
        
    </div>
  )
}

export default Header