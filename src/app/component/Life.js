import React from "react";
import { GoPencil } from "react-icons/go";
import { IoReload } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { GoComment } from "react-icons/go";

const Life = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="md:flex md:mt-5 flex-row justify-between items-center px-40">
        <h1>
          Comments <span>19</span>
        </h1>
        <button className="border inline-flex flex-row rounded-full md:p-2 items-center justify-center ">
          <GoPencil /> <span>Add comment</span>
        </button>
      </div>

      <div className=" max-w-lg mx-auto bg-white rounded-xl ovelflow-hidden md:max-w-2xl ">
        <div className="mt-10 md:flex flex-row space-x-5 border-t">
          <div className="md:shrink-0">
            <img
              className="h-14 w-14 m-5 object-cover md:h-15 md:w-15 rounded-full"
              src="https://randomuser.me/api/portraits/men/9.jpg"
              alt="author"
            />
          </div>
          <div className="p-8">
            <h1 classname="font-bold text-gray-800 block mt-2 leading-tight hover:underline ">
              Ryan Hall{" "}
              <span className="text-gray-300 font-light text-sm">
                July 17, 6:38 pm
              </span>
            </h1>
            <p className="text-gray-700 text-md mr-50 mt-2">
              In the event, "in places like Iraq and Jordan, leaders of the new
              sovereign states were brought in from the outside, tailored
              to suit colonial interests and commitments
            </p>
            <div className="flex flex-row  mt-8 items-center space-x-4 mb-0">
            <p  className="text-gray-700 flex items-center ml-2"> <GoComment classname="mr-2" /> <span>Reply</span></p>
            <p className="text-gray-700 flex items-center ml-2 hover:text-red-700"><AiOutlineLike classname="mr-2"/>+4</p>
            <p className="text-gray-700 flex items-center ml-2 hover:text-red-700"><AiOutlineDislike classname="mr-2" /></p>
          </div>
          </div>
          
        </div>
      </div>

      <div className=" max-w-lg mx-auto bg-white rounded-xl ovelflow-hidden md:max-w-2xl ">
        <div className="mt-10 md:flex flex-row space-x-5 border-t">
          <div className="md:shrink-0">
            <img
              className="h-14 w-14 m-5 object-cover md:h-15 md:w-15 rounded-full"
              src="https://randomuser.me/api/portraits/women/72.jpg"
              alt="author"
            />
          </div>
          <div className="p-8">
            <h1 classname="font-bold text-gray-800 block mt-2 leading-tight hover:underline ">
              Ryan Hall{" "}
              <span className="text-gray-300 font-light text-sm">
                July 17, 6:38 pm
              </span>
            </h1>
            <p className="text-gray-700 text-md mr-50 mt-2">
              In the event, "in places like Iraq and Jordan, leaders of the new
              sovereign states were brought in from the outside, tailored
              to suit colonial interests and commitments
            </p>

            <div className="flex flex-row  mt-8 items-center space-x-4 mb-0">
            <p  className="text-gray-700 flex items-center ml-2"> <GoComment classname="mr-2" /> <span>Reply</span></p>
            <p className="text-gray-700 flex items-center ml-2 hover:text-red-700"><AiOutlineLike classname="mr-2"/>+4</p>
            <p className="text-gray-700 flex items-center ml-2 hover:text-red-700"><AiOutlineDislike classname="mr-2" /></p>
          </div>

          </div>
        </div>
      </div>

      <div className=" max-w-lg mx-auto bg-white rounded-xl ovelflow-hidden md:max-w-2xl ">
        <div className="mt-10 md:flex flex-row space-x-5 border-t">
          <div className="md:shrink-0">
            <img
              className="h-14 w-14 m-5 object-cover md:h-15 md:w-15 rounded-full"
              src="https://randomuser.me/api/portraits/women/26.jpg"
              alt="author"
            />
          </div>
          <div className="p-8">
            <h1 classname="font-bold text-gray-800 block mt-2 leading-tight hover:underline ">
              Ryan Hall{" "}
              <span className="text-gray-300 font-light text-sm">
                July 17, 6:38 pm
              </span>
            </h1>
            <p className="text-gray-700 text-md mr-50 mt-2">
              In the event, "in places like Iraq and Jordan, leaders of the new
              sovereign states were brought in from the outside, tailored
              to suit colonial interests and commitments
            </p>   
            <div className="flex flex-row  mt-8 items-center space-x-4 mb-0">
            <p  className="text-gray-700 flex items-center ml-2"> <GoComment classname="mr-2" /> <span>Reply</span></p>
            <p className="text-gray-700 flex items-center ml-2 hover:text-red-700"><AiOutlineLike classname="mr-2"/>+4</p>
            <p className="text-gray-700 flex items-center ml-2 hover:text-red-700"><AiOutlineDislike classname="mr-2" /></p>
          </div>
          </div>
        </div>
      </div>

      <div className=" max-w-lg mx-auto bg-white rounded-xl ovelflow-hidden md:max-w-2xl ">
        <div className="mt-10 md:flex flex-row space-x-5 border-t">
          <div className="md:shrink-0">
            <img
              className="h-14 w-14 m-5 object-cover md:h-15 md:w-15 rounded-full"
              src="https://randomuser.me/api/portraits/men/46.jpg"
              alt="author"
            />
          </div>
          <div className="p-8">
            <h1 classname="font-bold text-gray-800 block mt-2 leading-tight hover:underline ">
              Ryan Hall{" "}
              <span className="text-gray-300 font-light text-sm">
                July 17, 6:38 pm
              </span>
            </h1>
            <p className="text-gray-700 text-md mr-50 mt-2">
              In the event, "in places like Iraq and Jordan, leaders of the new
              sovereign states were brought in from the outside, tailored
              to suit colonial interests and commitments
            </p>
            <div className="flex flex-row  mt-8 items-center space-x-4 mb-0">
            <p  className="text-gray-700 flex items-center ml-2"> <GoComment classname="mr-4" /> <span>Reply</span></p>
            <p className="text-gray-700 flex items-center ml-2 hover:text-red-700"><AiOutlineLike classname="mr-2"/>+4</p>
            <p className="text-gray-700 flex items-center ml-2 hover:text-red-700"><AiOutlineDislike classname="mr-2" /></p>
          </div>
          </div>
        </div>
      </div>

      <button className="w-full flex justify-center items-center border rounded-full max-w-xs mx-auto p-3 hover:bg-gray-100">
        <IoReload className="ml-10 mt-2 h-4 w-4 mr-2 text-gray-600" />
        Load more
      </button>

      <div className='max-w-lg mx-auto bg-gray-200 rounded-xl overflow-hidden md:max-w-2xl'>
        <div className="mt-20 md:flex flex-row space-x-5 border-t-black">
          <div>
            <img className='w-14 h-14 rounded-full object-cover md:h-15 md:w-15 m-5 mt-10' src='https://randomuser.me/api/portraits/women/94.jpg' alt='author'/>
          </div>
          <div>
            <h1 className='text-gray-800 font-bold text-xl mt-5'>What do you think?</h1>
            <div className='border shadow-sm border-gray-400 w-[400px] h-[100px] mt-7 mb-5 mr-5 bg-gray-400 hover:bg-white'></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Life;