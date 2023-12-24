import React from 'react'
import Data from './Data'

const SearchDataIndex = ({googleData}) => {
  return (
    <div>
       <div>
         <p> All {googleData.searchInformation.formattedTotalResults} </p>
         <p>result found in {googleData.searchInformation.formattedSearchTime} sec</p>
         {
            googleData ?.items.map((data, id) => {
                <Data data={data} key={id}/>
            })
         }
       </div>
    </div>
  )
}

export default SearchDataIndex