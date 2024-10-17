import Link from 'next/link'
import React from 'react'
import './home.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";

const HomePage = () => {
  return (
    <div className='home-back '>
      <div>
        <button className="border-black bg-slate-600 md:hidden rounded-full p-2">
          < IoEllipsisHorizontalCircle className="inline-block md:hidden text-xl mx-2" />
        </button>
      <div className='lg:flex hidden items-center justify-between border-none h-24 mt-5 mb-3 rounded-md px-9 ml-40 mr-40 bg-slate-950'>
      <div className='lg:flex w-full lg:w-1/4  '>
        <div>
            <h5 className='text-white'>25 Songs That Tell Us Where Music Is Going</h5>
        </div>
        <img src='/images/cf5b83098903bc7bd4080c6374b26b3b.png'/>
      </div>
      <div className='lg:flex w-full lg:w-1/4 '>
        <div>
            <h5 className='text-white' >These Ancient Assassins Eat Their Own Kind</h5>
        </div>
        <img src='/images/e0bd94b4f3a831eb2ca67eb7cec81da9.png'/>
      </div>
      <div className='lg:flex w-full lg:w-1/4 '>
        <div>
            <h5 className='text-white'>How Do You Teach People to Love Difficult Music?</h5>
        </div>
        <img src='/images/bf945768344df846b2c878924084000e.png'/>
      </div>
      <div className='lg:flex w-full lg:w-1/4 '>
        <div>
            <h5 className='text-white'>International Soccer’s Man of Mystery</h5>
        </div>
        <img src='/images/57eb2a627e81b2507118d2dfb564611f.png'/>
      </div>
    </div>

      </div>

     {/*img section*/}
      <section className='lg:flex space-x-0 ml-36 px-6 justify-between '>
        
          <div className='relative w-full lg:w-3/4 ml-30 z-10 rounded-l-lg  inline-block rounded overflow-hidden'>
            <div className='absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-bl from-black/10 to-black/70'></div>
            <img className='home-pic object-cover rounded-l-lg   ' 
             src='/images/903a2d47f3f39223dd356425663a28a5.png' 
             alt='pic'/>
        <div className='absolute top-20 left-10 z-20 m-3 flex justify-between flex-col space-x-14'>
            <img className="h-10 w-10 rounded-full absolute mr-2 object-cover " src="https://randomuser.me/api/portraits/men/7.jpg" alt="author"/>
            <div className="flex flex-col  ">
                    <h4 className="font-semibold text-gray-300 text-sm">By Benjamin Turner</h4> 
                    <p className='text-gray-200'>Traveler</p>       
            </div>


            <div className='flex-col'>
               <span className='text-sky-600 text-xl uppercase 
               mt-40 inline-flex px-4 py-1 mb-2'>
                Destinations</span>

                <h1 className='w-2/3 text-white text-3xl font-bold uppercase 
                leading-tight mt-10 font-sans'>In Southeast England, White Cliffs and Fish</h1>

                
            </div>

            <div className='flex  items-center space-x-4'>
                  <button className='bg-gradient-to-bl from-blue-600 
                to-indigo-600 text-white inline-flex items-center 
                justify-center px-4 py-1 mt-10 mr-4 rounded-full'>Read More  <FaArrowRightLong /></button>

                <span className=' text-white flex items-center mt-10'>
                  <IoPlayCircleOutline className="text-4xl mr-2" />

                  <div className="flex flex-col">
                      <p className="font-semibold text-gray-800">The chalk cliff of Beachy Head</p>
                         <time className="text-gray-400 text-sm">16:12</time>
                  </div>                  
                  </span>
                  
                </div>
                
        </div>
          </div>

          <div className='w-full lg:w-1/4 px-2 mb-5 bg-slate-100 rounded-r-md inline-block overflow-hidden '>
            <h5 className="text-2xl font-semibold text-gray-400  leading-tight uppercase rounded-r-lg">Recomended for you</h5>
            <ul className='w-48 rounded-r-lg'>
              <li className='py-4 px-1 rounded-r-lg  border-white transition-all duration-300 hover:border-grey-200'>
                <h3 className='mb-2 font-bold text-xl text-gray-700'>FOOD</h3>
                <p className='text-gray-500'>For Chicken-Fried Steak, Too Much Is Just Enough</p>
              </li>
            </ul>
           
            <ul>
              <li className='py-4 px-1 border-y border-white transition-all duration-300 hover:border-grey-200'>
                <h3 className='mb-2 font-bold text-xl text-gray-700'>FOOD</h3>
                <p className='text-gray-500'>For Chicken-Fried Steak, Too Much Is Just Enough</p>
              </li>
            </ul>
          
            <ul>
              <li className='py-4 px-1 border-y border-white transition-all duration-300 hover:border-grey-200'>
                <h3 className='mb-2 font-bold text-xl text-gray-700'>FOOD</h3>
                <p className='text-gray-500'>For Chicken-Fried Steak, Too Much Is Just Enough</p>
              </li>
            </ul>
            
            <ul>
              <li className='py-4 px-1 border-y border-white transition-all duration-300 hover:border-grey-200'>
                <h3 className='mb-2 font-bold text-xl text-gray-700'>FOOD</h3>
                <p className='text-gray-500'>For Chicken-Fried Steak, Too Much Is Just Enough</p>
              </li>
            </ul>
          
            <ul>
              <li className='py-4 px-1 rounded-r-md border-y border-white transition-all duration-300 hover:border-grey-200'>
                <h3 className='mb-2 font-bold text-xl text-gray-700'>FOOD</h3>
                <p className='text-gray-500'>For Chicken-Fried Steak, Too Much Is Just Enough</p>
              </li>
            </ul>
          </div>
      </section>

    </div>

       
  )
}

export default HomePage
