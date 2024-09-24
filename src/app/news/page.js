import React from 'react';
import Link from 'next/link';
import { AiOutlineHome } from "react-icons/ai";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const NewsPage = () =>{
    return(
        <main className='relative'>
            <div className ='relative inline-block overflow-visible'>
                <div className='relative w-full h-full bg-img'>
                     <div className='absolute z-10 left-0 top-0 w-full h-full'></div>
                <img className=' top-0 w-full h-full object-cover ' src='https://th.bing.com/th/id/OIP.pOj4wYzV37FS_GUL3Jhg4AHaEo?rs=1&pid=ImgDetMain' alt='pic'/>

                <div className='absolute z-20 m-3 left-10 flex flex-col space-x-4 justify-between'>
                <span className='text-white text-xl uppercase 
               mt-40 px-4 py-1 mb-2'>
                Destinations</span>

                <Link className='text-white flex items-center space-x-2' href='/'><AiOutlineHome /> 
                <span className='text-white'> Back to main</span></Link>

                <button>
                <FaLongArrowAltLeft /> 
                <span>Prew</span>
                <span>Next</span>
                <FaLongArrowAltRight />
                </button>
                </div>
                </div>
                
            </div>
        </main>
    )
}
export default NewsPage;