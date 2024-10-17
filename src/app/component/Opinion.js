import React from "react";
import { IoMdEye } from "react-icons/io";
import { GoComment } from "react-icons/go";
import { FaQuoteLeft } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

const OpinionPage = () => {
  return (
    <main>
      <div>
        <div className="flex justify-center items-center mb-8">
          <img
            className="w-[1200px] h-auto rounded-lg "
            src="https://th.bing.com/th/id/OIP.NosGhpVQQnlim44F-8ooNgHaE8?rs=1&pid=ImgDetMain "
            alt="img"
          />
        </div>

        <div className="flex justify-between items-center p-4">
          <div className="w-[700px] h-auto ml-20 top-0">
            <div>
              <p>
              The oldest known world maps date back to ancient Babylon from the
              9th century BC. The best known Babylonian world map, however, is
              the Imago Mundi of 600 BC. The map as reconstructed by Eckhard
              Unger shows Babylon on the Euphrates, surrounded by a circular
              landmass showing Assyria, Urartu and several cities, in turn
              surrounded by a "bitter river" (Oceanus), with seven islands
              arranged around it so as to form a seven-pointed star.
            </p>
            <p>
              The accompanying text mentions seven outer regions beyond the
              encircling ocean. The descriptions of five of them have survived.
              In contrast to the Imago Mundi, an earlier Babylonian world map
              dating back to the 9th century BC depicted Babylon as being
              further north from the center of the world, though it is not
              certain what that center was supposed to represent.
            </p>
            <p>
              The ideas of Anaximander: considered by later Greek writers to be
              the true founder of geography, come to us through fragments quoted
              by his successors. Anaximander is credited with the invention of
              the gnomon, the simple, yet efficient Greek instrument that
              allowed the early measurement of latitude. Thales is also credited
              with the prediction of eclipses. The foundations of geography can
              be traced to the ancient cultures, such as the ancient, medieval,
              and early modern Chinese.
            </p>
            </div>

             <div className="flex flex-row  justify-between relative mt-10">
              <div className="w-[450px]">
                <FaQuoteLeft className="absolute opacity-40 font-extrabold text-6xl z-10 text-sky-400" />

                <h2 className="font-semibold text-md ">
                  Names of places... are not geography... know by heart a whole
                  gazetteer full of them would not, in itself, constitute anyone
                  a geographer. Geography has higher aims than this: it seeks to
                  classify phenomena.
                </h2>
              </div>
              <div className="w-[200px] mt-3 ml-5 ">
                <img src="/images/image-223.png" alt="author" />
                <h4>William Peterson</h4>
                <p className="text-gray-500 font-light text-sm">Travel Agent</p>
              </div>
            </div>

            <div>
           
            <p className="mt-5">
              The Greeks, who were the first to explore geography as both art
              and science, achieved this through Cartography, Philosophy, and
              Literature, or through Mathematics. There is some debate about who
              was the first person to assert that the Earth is spherical in
              shape, with the credit going either to Parmenides or Pythagoras.
              Anaxagoras was able to demonstrate that the profile of the Earth
              was circular by explaining eclipses. However, he still believed
              that the Earth was a flat disk, as did many of his contemporaries.
            </p>

            <p className="mt-5">
              The first rigorous system of latitude and longitude lines is
              credited to Hipparchus. He employed a sexagesimal system that was
              derived from Babylonian mathematics.
            </p>

            <div className="flex flex-row justify-between items-center mt-8">
              <button className="border hover:bg-sky-600 ease-in-out hover:translate-x-2 rounded-md text-center">
                Travel
              </button>
              <button className="border hover:bg-sky-600 ease-in-out hover:translate-x-2 rounded-md">
                Destinations
              </button>
              <button className="border hover:bg-sky-600 ease-in-out hover:translate-x-2 rounded-md">
                Nature
              </button>
              <button className="border hover:bg-sky-600 ease-in-out hover:translate-x-2 rounded-md">
                World
              </button>
              <button className="border hover:bg-sky-600 ease-in-out hover:translate-x-2 rounded-md">
                Alaska
              </button>
            </div>

            <div className="flex flex-col border-t mt-10">
              <h3 className="font-bold text-2xl mt-10 ">Show Your Support</h3>

              <div className="flex flex-row justify-between items-center mt-8">
                <button className="bg-red-600 text-white rounded-full inline-flex items-center justify-center flex-row p-2">
                  <FaHeart className="mx-2" /> Like it 42
                </button>
                <button className="bg-cyan-800 text-white rounded-full inline-flex items-center justify-center flex-row p-2">
                  <FaFacebook className="mx-2" /> Share 80
                </button>
                <button className="bg-red-600 text-white rounded-full inline-flex items-center justify-center flex-row p-2">
                  <AiFillTwitterCircle className="mx-2" /> Tweet 33
                </button>

                <button className="text-gray-400">
                  {" "}
                  <HiOutlineDotsCircleHorizontal />
                </button>
              </div>
            </div>
          </div>


            
            
          </div>


          <div className='w-[300px] h-auto flex-col mt-20 mr-20 '>
            <h3 className="text-xl text-black font-bold text-center ">Material on Theme</h3>
            <div>
              <img
                className="w-[180px] h-[200px] rounded-lg my-4 ml-16"
                src="https://th.bing.com/th/id/OIP.2DULMRKMeWduCrVph4U3lwAAAA?rs=1&pid=ImgDetMain"
                alt="giraffe"
              />
            </div>
            <div>
              <h5 className="text-lg font-bold text-center">Application of Postcolonial Theory in the Middle East</h5>
              <p className="text-base text-gray-500">
                In the essays "Overstating the Arab State", by Nazih Ayubi, and
                "Is Jordan Palestine?", by Raphael Israel, the authors deal with
                the psychologically fragmented postcolonial identity.
              </p>
            </div>
            <div className="flex flex-row  mt-3 items-center space-x-4">
              <p className="text-gray-700 flex items-center ml-2">
                <IoMdEye classname="mr-2" /> <span>1.623</span>
              </p>
              <p className="text-gray-700 flex items-center ml-2">
                <GoComment classname="mr-2" /> 582
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OpinionPage;
