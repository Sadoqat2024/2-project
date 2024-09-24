import React from 'react';
import { IoMdEye } from "react-icons/io";
import { GoComment } from "react-icons/go";

const Travel = () => {
  return (
    <div className="bg-gray-200 p-10">
      <div className="flex flex-row justify-between items-center">
        <div className='lg:w-1/5'>
          <img className='rounded' src="/images/image-224.jpg" alt="travel" />
          <h2 className='font-semibold text-xl text-gray-800 mt-3'>An Evangelist of Singaporean Food Has a New Pulpit</h2>
          
          <div className='flex flex-row  mt-5 items-center space-x-4'>
             <p className="text-gray-500 flex items-center ml-2">
            <IoMdEye classname="mr-2" /> <span>1.623</span>
          </p>
          <p className="text-gray-500 flex items-center ml-2">
            <GoComment classname="mr-2" /> 582
          </p>
          </div>
         
        </div>
        <div className='lg:w-1/5'>
          <img className='rounded' src="/images/image-225.jpg" alt="travel" />
          <h2 className='font-semibold text-xl text-gray-800 mt-3'>At the Mouth of the Mississippi, a Weird and Fragile Beauty</h2>
          
          <div className='flex flex-row  mt-5 items-center space-x-4'>
             <p className="text-gray-500 flex items-center ml-2">
            <IoMdEye classname="mr-2" /> <span>1.623</span>
          </p>
          <p className="text-gray-500 flex items-center ml-2">
            <GoComment classname="mr-2" /> 582
          </p>
          </div>
         
        </div>
        <div className='lg:w-1/5'>
          <img className='rounded' src="/images/image-226.jpg" alt="travel" />
          <h2 className='font-semibold text-xl text-gray-800 mt-6'>Chattanooga Is Changing. But Its Charms Remain.</h2>
          
          <div className='flex flex-row  mt-5 items-center space-x-4'>
             <p className="text-gray-500 flex items-center ml-2">
            <IoMdEye classname="mr-2" /> <span>1.623</span>
          </p>
          <p className="text-gray-500 flex items-center ml-2">
            <GoComment classname="mr-2" /> 582
          </p>
          </div>
         
        </div>
        <div className='lg:w-1/5'>
          <img className='rounded' src="/images/image-227.jpg" alt="travel" />
          <h2 className='font-semibold text-xl text-gray-800 mt-3'>How to Get by in a Country if You Don’t Know the Language</h2>
          
          <div className='flex flex-row  mt-5 items-center space-x-4'>
             <p className="text-gray-500 flex items-center ml-2">
            <IoMdEye classname="mr-2" /> <span>1.623</span>
          </p>
          <p className="text-gray-500 flex items-center ml-2">
            <GoComment classname="mr-2" /> 582
          </p>
          </div>
         
        </div>

       
      </div>
    </div>
  );
};

export default Travel;
