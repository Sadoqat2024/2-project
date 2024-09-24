import React from "react";
import "../component/home.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { FaHeart } from "react-icons/fa";

import Link from "next/link";

const ArtPage= () => {
  return (
    <main>
      <div>
        <div className="relative z-10 overflow-hidden w-full">
          <div className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-bl from-black/10 to-black/70"></div>
          <img
            className="bloom-img w-full h-60 mt-20 object-cover"
            src="/images/R.png"
          />
          <div className="absolute top-20 z-20 m-3 flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mt-10 pl-30 py-5">
              <h1 className=" text-center text-white text-4xl font-bold">
                The Big Bloom or «How Flowering Plants Changed the World»
              </h1>
            </div>
            <div className="flex  items-center space-x-4">
              <button
                className="bg-gradient-to-bl from-blue-600 
                         to-indigo-600 text-white inline-flex items-center 
                          justify-center px-4 py-1 mt-10 mr-4 hover:bg-blue-500 rounded-full"
              >
                Read More <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>

        <div className="container lg:flex bg-gray-300 flex w-full space-x-2">
          <div className=" w-full lg:w-2/3 mt-10 ml-10 border-spacing-1 rounded-md bg-white ">
            <section className="px-2">
              <div className="mb-10 block w-full lg:flex">
                <img
                  className="w-full lg:w-45 h-45 oppacity-80 lg:m-4 object-cover"
                  src="/images/image-192.png"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between mt-4 mr-4">
                      <Link
                        className="text-blue-400 text-sm uppercase"
                        href={"/"}
                      >
                        Flights
                      </Link>
                      <button className="text-gray-400 hover:text-red-600 ">
                        <FaBookmark />
                      </button>
                    </div>

                    <h2 className="mb-2 font-bold text-2xl text-gray-800">
                      Passengers Suffer as Crowded Field Puts Pressure on
                      Europe’s Airlines
                    </h2>
                    <p className="text-gray-700 dark:text-slate-400">
                      Weaker carriers have fallen by the wayside amid fierce
                      competition, while others have been hit by bad luck. The
                      result: thousands of canceled flights.
                    </p>
                  </div>
                  <div className="flex flex-row  mt-5 items-center space-x-4">
                    <p className="text-gray-600">aug 6 </p>
                    <p className="text-gray-700 flex items-center ml-2">
                      <GoComment classname="mr-2" /> 342
                    </p>
                    <p className="text-gray-600 flex items-center hover:text-red-600">
                      <FaHeart classname="mr-2" /> 830
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-10 block w-full lg:flex">
                <img
                  className="w-full lg:w-50 h-45 oppacity-80 lg:m-4 object-cover"
                  src="/images/Imagecake.png"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between mt-4 mr-4">
                      <Link
                        className="text-blue-400 text-sm uppercase"
                        href={"/"}
                      >
                        Foods
                      </Link>
                      <button className="text-gray-400 hover:text-red-600 ">
                        <FaBookmark />
                      </button>
                    </div>
                    <h2 className="mb-2 font-bold text-2xl text-gray-800">
                      Three Courses, 20 Euros: The Affordable Dining Renaissance
                      in Paris
                    </h2>
                    <p className="text-gray-700 dark:text-slate-400">
                      The Los Angeles area, for all of its culinary diversity,
                      has not historically been thought of as a haven for bread
                      lovers. The area has a reputation as a place where gluten
                      fears to tread.
                    </p>
                  </div>
                  <div className="flex flex-row  mt-5 items-center space-x-4">
                    <p className="text-gray-600">oct 6 </p>
                    <p className="text-gray-700 flex items-center ml-2">
                      <GoComment classname="mr-2" /> 342
                    </p>
                    <p className="text-gray-600 flex items-center hover:text-red-600">
                      <FaHeart classname="mr-2" /> 450
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-10 block w-full lg:flex">
                <img
                  className="w-full lg:w-45 h-45 oppacity-80 lg:m-4 object-cover"
                  src="/images/Imageflo.png"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between mt-4 mr-4">
                      <Link
                        className="text-blue-400 text-sm uppercase"
                        href={"/"}
                      >
                        Science
                      </Link>
                      <button className="text-gray-400 hover:text-red-600 ">
                        <FaBookmark />
                      </button>
                    </div>
                    <h2 className="mb-2 font-bold text-2xl text-gray-800">
                      Watch the High-Flying Physics of a Plant’s Exploding
                      Fruits
                    </h2>
                    <p className="text-gray-700 dark:text-slate-400">
                      Three undergradute physics majors and their professor
                      worked out how  the hairyflower wild petunia shoots tiny
                      seeds more than 20 feet through the air
                    </p>
                  </div>
                  <div className="flex flex-row  mt-5 items-center space-x-4">
                    <p className="text-gray-600">oct 6 </p>
                    <p className="text-gray-700 flex items-center ml-2">
                      <GoComment classname="mr-2" /> 342
                    </p>
                    <p className="text-gray-600 flex items-center hover:text-red-600">
                      <FaHeart classname="mr-2" /> 450
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-10 block w-full lg:flex">
                <img
                  className="w-full lg:w-45 h-45 oppacity-80 lg:m-4 object-cover"
                  src="/images/Image.png"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between mt-4 mr-4">
                      <Link
                        className="text-blue-400 text-sm uppercase"
                        href={"/"}
                      >
                        Health
                      </Link>
                      <button className="text-gray-400 hover:text-red-600">
                        <FaBookmark />
                      </button>
                    </div>
                    <h2 className="mb-2 font-bold text-2xl text-gray-800">
                      How the Shape of Your Ears Affects What You Hear
                    </h2>
                    <p className="text-gray-700 dark:text-slate-400">
                      We’re able to locate sound because our brains grasp the
                      shape of our ears. When that shape changes, we need time
                      and practice to adapt. Ears are a peculiarly individual
                      piece of anatomy.
                    </p>
                  </div>
                  <div className="flex flex-row  mt-5 items-center space-x-4">
                    <p className="text-gray-600">oct 19 </p>
                    <p className="text-gray-700 flex items-center ml-2">
                      <GoComment classname="mr-2" /> 420
                    </p>
                    <p className="text-gray-600 flex items-center hover:text-red-600">
                      <FaHeart classname="mr-2" /> 520
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-10 block w-full lg:flex">
                <img
                  className="w-full lg:w-45 h-45 oppacity-80 lg:m-4 object-cover"
                  src="/images/Imageforest.png"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between mt-4 mr-4">
                      <Link
                        className="text-blue-400 text-sm uppercase"
                        href={"/"}
                      >
                        Science
                      </Link>
                      <button className="text-gray-400 hover:text-red-600">
                        <FaBookmark />
                      </button>
                    </div>
                    <h2 className="mb-2 font-bold text-2xl text-gray-800">
                      Forests Protect the Climate. A Future With More Storms
                      Would Mean Trouble.
                    </h2>
                    <p className="text-gray-700 dark:text-slate-400">
                      Three undergradute physics majors and their professor
                      worked out how  the hairyflower wild petunia shoots tiny
                      seeds more than 20 feet through the air
                    </p>
                  </div>
                  <div className="flex flex-row  mt-5 items-center space-x-4">
                    <p className="text-gray-600">oct 6 </p>
                    <p className="text-gray-700 flex items-center ml-2">
                      <GoComment classname="mr-2" /> 342
                    </p>
                    <p className="text-gray-600 flex items-center hover:text-red-600">
                      <FaHeart classname="mr-2" /> 450
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-10 block w-full lg:flex">
                <img
                  className="w-full lg:w-45 h-45 oppacity-80 lg:m-4 object-cover"
                  src="/images/Imageyellow.png"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between mt-4 mr-4">
                      <Link
                        className="text-blue-400 text-sm uppercase"
                        href={"/"}
                      >
                        Art & Design
                      </Link>
                      <button className="text-gray-400 hover:text-red-600">
                        <FaBookmark />
                      </button>
                    </div>
                    <h2 className="mb-2 font-bold text-2xl text-gray-800">
                      New Contemporary Institute Reverberates in Richmond’s
                      Historic Landscape
                    </h2>
                    <p className="text-gray-700 dark:text-slate-400">
                      The center, which will open in April, takes a bold look at
                      race and other social issues that still resonate in the
                      region as well as the nation. A new Institute for
                      Contemporary Art is set to open.
                    </p>
                  </div>
                  <div className="flex flex-row  mt-5 items-center space-x-4">
                    <p className="text-gray-600">oct 25 </p>
                    <p className="text-gray-700 flex items-center ml-2">
                      <GoComment classname="mr-2" /> 582
                    </p>
                    <p className="text-gray-600 flex items-center hover:text-red-600">
                      <FaHeart classname="mr-2" /> 358
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar w-full lg:w-1/4 px-4 mx-auto py-6 md:flex md:space-x-6 rounded-md pr-10 mt-10 ml-10 lg:block lg:space-x-0 bg-white">
            <div className="w-full md:w-1/4 lg:w-full mb-5 mr-10 ">
              <div className=" uppercase text-md font-semibold text-center divide-y border-gray-400 border-b">
                <h4 className="object-cover rounded">Recomended for you</h4>
              </div>
            </div>

            <div className="flex mb-6 relative p-4 space-x-4 items-start border-gray-400 border-b ">
              <img
                src="/images/image-178.png"
                className="w-12 h-12 object-cover rounded"
                alt="img"
              />
              <div className="flex-1 ">
                <p className="font-semibold">
                  Office Meetings Leave the Office
                </p>
                <p className="text-gray-500 text-sm">15 minuts ago</p>
              </div>

              <h1 className="absolute right-0 top-0 font-bold text-6xl text-gray-200 oppacity-40 z-10">
                1
              </h1>
            </div>

            <div className="flex mb-6 relative space-x-4 items-start border-gray-400 border-b ">
              <img
                src="/images/Imagebird.png"
                className="w-12 h-12 object-cover rounded"
                alt="img"
              />
              <div className="flex-1">
                <p className="font-semibold">
                  Experimental Vocal Music in Brooklyn
                </p>
                <p className="text-gray-500 text-sm">32 minuts ago</p>
              </div>

              <h1 className="absolute right-0 top-0 font-bold text-6xl text-gray-200 oppacity-40 z-10">
                2
              </h1>
            </div>
            <div className="flex mb-6 relative space-x-4 items-start border-gray-400 border-b ">
              <img
                src="/images/Imagehand.png"
                className="w-12 h-12 object-cover rounded"
                alt="img"
              />
              <div className="flex-1">
                <p className="font-semibold">
                  Google’s Influence Over Think Tanks
                </p>
                <p className="text-gray-500 text-sm">35 minuts ago</p>
              </div>

              <h1 className="absolute right-0 top-0 font-bold text-6xl text-gray-200 oppacity-40">
                3
              </h1>
            </div>
            <div className="flex mb-6 relative space-x-4 items-start border-gray-400 border-b ">
              <img
                src="/images/image-181.png"
                className="w-12 h-12 object-cover rounded"
                alt="img"
              />
              <div className="flex-1">
                <p className="font-semibold">
                  Homes for Sale in NYC and Connecticut
                </p>
                <p className="text-gray-500 text-sm">53 minuts ago</p>
              </div>

              <h1 className="absolute right-0 top-0 font-bold text-6xl text-gray-200 oppacity-40">
                4
              </h1>
            </div>
            <div className="flex mb-6 relative space-x-4 items-start border-gray-400 border-b ">
              <img
                src="/images/Imageoooc.png"
                className="w-12 h-12 object-cover rounded"
                alt="img"
              />
              <div className="flex-1">
                <p className="font-semibold">
                  Are You There, Dad? It’s Me, Alice
                </p>
                <p className="text-gray-500 text-sm">1 hour ago</p>
              </div>

              <h1 className="absolute right-0 top-0 font-bold text-6xl text-gray-200 oppacity-10">
                5
              </h1>
            </div>
            <div className="flex mb-6 relative space-x-4 items-start border-gray-400 border-b ">
              <img
                src="/images/Imageoooc.png"
                className="w-12 h-12 object-cover rounded"
                alt="img"
              />
              <div className="flex-1">
                <p className="font-semibold">
                  The New Punk Look: Lacy and Colorful
                </p>
                <p className="text-gray-500 text-sm">53 minuts ago</p>
              </div>

              <h1 className="absolute right-0 top-0 font-bold text-6xl text-gray-200 oppacity-40">
                6
              </h1>
            </div>
            <div className="flex mb-6 relative space-x-4 items-start border-gray-400 border-b ">
              <img
                src="/images/Imagebrook.png"
                className="w-12 h-12 object-cover rounded"
                alt="img"
              />
              <div className="flex-1">
                <p className="font-semibold">
                  Sunday Best in Harlem and Brooklyn
                </p>
                <p className="text-gray-500 text-sm">2 hours ago</p>
              </div>

              <h1 className="absolute right-0 top-0 font-bold text-6xl text-gray-200 oppacity-40">
                7
              </h1>
            </div>
            <div className="font-semibold text-md text-center">
              <p>Read more</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArtPage;