import React from "react";
import "./home.css";
import { PiImagesSquareLight } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const BlackSection = () => {
  return (
    <div className="bg-black/70 w-full lg:w-[1366] lg:h-[690] lg:px-8 h-auto ">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 lg:flex  lg:mb-0 p-5 relative mb-8">
          <div className="m-20 relative inline-block rounded overflow-hidden">
            <div class="absolute inset-0 z-10 bg-gradient-to-b from-black/10 to-black/70"></div>

            <img
              className="w-full lg:w-[450px] 
                     h-[500px] object-cover rounded"
              src="/images/Image112.png"
              alt="black"
            />

            <div className="absolute top-20 left-8 z-20 text-white flex flex-col space-y-4">
              <div className="flex items-center flex-col space-x-4">
                <img
                  className="h-10 w-10 rounded-full object-cover "
                  src="https://randomuser.me/api/portraits/women/67.jpg"
                  alt="author"
                />
                <p className="font-semibold">By Sarah Jenkins</p>
                <p className="text-sm">Photographer</p>
              </div>

              <div className="flex items-center flex-col space-y-4">
                <h1 className="font-bold text-2xl leading-snug max-w-lg text-center">
                  Readers' Choice winners: Your wine country favorites
                </h1>
                <button
                  className="w-[250px] mt-10 inline-flex justify-center bg-blue-400 
                    hover:bg-blue-600 text-white rounded-full items-center space-x-2 
                    transition px-2 py-4 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                >
                  <PiImagesSquareLight />
                  <span>Watch photos 26</span>
                </button>

                <img className=" mt-5 w-10" src="/images/Default.png" alt="/" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex flex-wrap justify-end items-center gap-3">
          <div className="w-full lg:w-1/2 md:w-[450px] h-[335px] bg-sky-200 flex m-10 ml-40 relative">
            <div className="flex flex-row space-y-3">
              <div className="ml-5">
                <Link className=" text-sm text-gray-400 uppercase" href="#">
                  Career
                </Link>
                <h3 className="font-bold text-xl mt-3">
                  Had a Job Interview but No Callback? Here’s What to Do
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Try to understand the culture of the company where you want to
                  work and be authentic in your interview, experts emphasize
                </p>
                <button
                  className="bg-gradient-to-bl from-blue-600 
                         to-indigo-600 text-white inline-flex items-center 
                          justify-center px-4 py-1 mt-10 mr-4 hover:bg-blue-500 rounded-full"
                >
                  <span>Read More</span> <FaArrowRightLong />
                </button>
              </div>

              <img
                className="w-full lg:w-60 h-80 mt-10 scale object-cover rounded-lg"
                src="/images/image-169.png"
                alt="/"
              />
            </div>
          </div>

          <div className="w-56 h-40 bg-blue-100 border-dashed rounded-lg">
            <h1 className="font-bold ">Is Coffee Bad for Bones?</h1>
            <p>
              Coffee drinkers may excrete more calcium, but it doesn’t appear to
              weaken bones
            </p>
          </div>

          <div className="w-56 h-40 bg-blue-100 border-dashed rounded-lg">
            <h1 className="font-bold ">Is Coffee Bad for Bones?</h1>
            <p>
              Coffee drinkers may excrete more calcium, but it doesn’t appear to
              weaken bones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackSection;
