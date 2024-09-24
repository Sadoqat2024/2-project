'use client'

import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import Link from 'next/link';
import { GoSun } from "react-icons/go";
import { FaCloud } from "react-icons/fa";

const Navbar = () => {
  
  const router = useRouter();
  const [weather, setWeather] = useState(null);

  useEffect(() =>{
    const apiKey = '53780d9fbfd2a0c979cfba47c078eac8';
    const location = 'Uzbekistan';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
    
    .then(response =>response.json())
    .then (data =>{
      setWeather({
        temprature: Math.round(data.main.temp),
        condition: data.weather[0].main
      })
    })
    .catch(error => console.error('Error fetching weather data:', error));
  }, [])

  return (
    <header className="bg-white shadow-sm">
      <nav className='flex jitems-center p-4  border-b-red-700 border-dotted'>
        <div className="flex  items-center ustify-between space-x-2 ml-10">
        <RiMenu2Fill className="text-xl"/> 
        <p className="">Section</p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex items-center">
            <input
            className=" pl-10 pr-10 py-2 border rounded-md text-sm" 
            type="text" 
            placeholder="Search"/>
            < CiSearch className="absolute left-2 text-xl text-gray-500" />
          </div>

          
        </div>

        
          <div className="text-right lg:flex items-center space-x-4">
            <img className="w-20 h-16 object-cover" 
             src="/images/047b927b157d250740fe3f7864e04c62.png"/>
            <h4 className='text-sm font-semibold inline-flex'>Subscribe now</h4> <br/>
            <p className='text-xs text-gray-500 '>3 month for $19</p>
          </div>  
          
        <div className="lg:flex items-center space-x-4 mr-10">
           <button className='flex items-center space-x-4 ' >
              <IoPersonSharp className='text-xl text-gray-500'/>
              <p className='text-sm font-semibold'>Sign in</p>
             </button>
        </div>
      </nav>  

    <div className='lg:flex items-center justify-between space-x-4 border-t-2 '>
      <div className='lg:flex items-center space-x-3'>
        <img src='/images/fb6c1ff24bd2e282b18cfa8da606c2b5.png' alt='statue'
        className="ml-20"/>
        <p className='text-md text-gray-900'>Boston and New York Bear Brunt</p>
      </div>

      <h6 className=' font-bold justify-center text-5xl' href={'/'}>Universal</h6>

      <div className='mr-10 pr-7'>
        <time className='text-md text-gray-900'>Monday, January 1, 2024</time>
      </div>

      {weather ? (
        <div className='lg:flex items-center space-x-1  pr-10'>
        <p className='text-sm font-semibold'>{weather.condition}</p>
        <p className='text-sm'>{weather.temprature}°C</p>
      </div>
      )  : (
        <p>Loading weather...</p> 
      )
       }
      
    </div>

    <div className='md:h-11 lg:flex  items-center justify-between px-10  bg-zinc-900 text-white border border-t-2'>
      <Link className='font-sans text-opacity-10 shadow-md' href={'/news'}>NEWS</Link>
      <Link className='font-sans text-opacity-10 shadow-md' href={'/opinion'}>OPINION</Link>
      <Link className='font-sans text-opacity-10 shadow-md' href={'/life'}>LIFE</Link>
      <Link className='font-sans text-opacity-10 shadow-md' href={'/science'}>SCIENCE</Link>
      <Link className='font-sans text-opacity-10 shadow-md' href={'/travel'}>TRAVEL</Link>
      <Link className='font-sans text-opacity-10 shadow-md' href={'/moneys'}>MONEYS</Link>
      <Link className='font-sans text-opacity-10 shadow-md' href={'/artdesign'}>ART&DESIGN</Link>
      <Link className='font-sans text-opacity-10 shadow-md' href={'/sports'}>SPORTS</Link>
      <Link className='font-sans text-opacity-10 shadow-md' href={'/people'}>PEOPLE</Link>
      <Link className='font-sans text-opacity-10 shadow-md' href={'/health'}>HEALTH</Link>
      <Link className='font-sans text-opacity-10 shadow-md' href={'/education'}>EDUCATION</Link>
    </div>
      
    </header>
  )
}

export default Navbar
