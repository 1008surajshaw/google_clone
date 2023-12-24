import "./App.css";
import HomeSearch from "./pages/HomeSearch";
import { Routes,Route } from "react-router-dom";
import SearchScreen from "./pages/SearchScreen";
import { useState } from "react";
 import {useNavigate} from 'react-router-dom' 
import { searchData } from "./api/googleSearch";
function App() {
  const navigate = useNavigate();
  const [searchTerm , setSearchTerm] = useState('')
  const [googleData,setGoogleData] = useState({})
  const setSearch = async (term) =>{
    console.log(term,"what is the term")
    setSearchTerm(term);
    const Data = await searchData(term);
    console.log(Data,"data of goole")
    setGoogleData(Data);
     navigate('/search');
  }

  return (
    
    <div className="w-screen min-h-screen bg-richblack-900 text-richblack-5 ">
      <Routes>
        <Route path={'/'} element={<HomeSearch setSearch={setSearch}/>}/>
        <Route path={'/search'} element={<SearchScreen searchTerm={searchTerm} googleData={googleData} setSearch={setSearch}/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
