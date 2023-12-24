import React,{useState} from 'react'
import img from "../../assets/googles-most-searched-playground-6753651837110167.4-la202124.gif"
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMicrophone } from "react-icons/hi2";
const Home = ({setSearch}) => {
    const[input,setInput] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(/^[a-zA-z0-9].*/.test(input) || /^[a-zA-z0-9]+" ".*/.test(input)){
            setSearch(input);
        }
    }
    const handleButton = (e) =>{
        if(/^[a-zA-z0-9].*/.test(input) || /^[a-zA-z0-9]+" ".*/.test(input)){
            setSearch(input);
        }
    }
    const clearInput = () =>{
        setInput('');
    }
  return (
    <div className='text-richblack-5 flex flex-col justify-center mx-auto mt-10 w-11/12'>
        <div>
            <img
               src={img}
            className='w-[70%] lg:w-[25%] flex mx-auto'
           />
        <div className='flex mx-auto mt-8 w-[80%] lg:w-[40%] border-white border-2 p-4 rounded-[9rem]'>
            <IoSearchSharp />
            <form className='w-[100%]' onSubmit={handleSubmit}>
                <input
                type='text'
                value={input}
                onChange={e => setInput(e.target.value)}
                className='sm:w-[90%]  w-350px  flex mx-auto h-[30px] p-4 bg-white border-none'
                />

            </form>
            {
            input ? <RxCross2 onClick={(e) => clearInput()}/> : null
            }
            <button type='button' onClick={handleButton} >
                <HiOutlineMicrophone/>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Home