import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/search/Header';
import SearchDataIndex from '../components/search/searchData/SearchDataIndex';

const SearchScreen = ({ searchTerm,googleData,setSearch }) => {
    const navigate = useNavigate();
    
    console.log(searchTerm,"search Term ")
    console.log(googleData,"google data")

    useEffect(() =>{
        if(searchTerm === ''){
            navigate('/')
        }
       //eslint-disable-next-line 
    },[searchTerm])
  return (
    <>
      <Header searchTerm={searchTerm} setSearch={setSearch}/>
      <div>
        <div>
          SearchScreen {searchTerm}
          <SearchDataIndex googleData={googleData}/>
        </div>
      </div>
    </>
   
  )
}

export default SearchScreen