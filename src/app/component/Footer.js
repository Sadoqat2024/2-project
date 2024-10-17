import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-white p-2 md:flex flex flex-col md:items-center hover:bg-violet-100 mt-12">
      {/*section 1*/}
      <section className="md:flex flex-col md:justify-center md:items-center text-center mb-6 text-black">
        <h2 className="heading font-serif md:mb-6 font-bold lg:text-3xl text-4xl lg:leading-normal leading-tight mt-10">
          Subscribe now and get 20% off
        </h2>
        <div className="inputarea w-full lg:w-full">
          <form>
            <input
              className="footerinput pr-8 pl-20 border-2 md:mr-3 mr-2 
              outline-none font-light mb-4 border-gray-600 
              hover:-translate-y-1 ease-in-out rounded-md"
              name="email"
              type="email"
              placeholder="Your email"
            />

            <button
              className="md:w-auto px-5 py-2.5 bg-blue-400 text-white font-semibold 
            border-2 hover:-translate-y-1 ease-in-out rounded-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      {/*section 2*/}
      <section className="border-t mt-10 py-10 px-2 w-full">
        <div className=""></div>
        <div className="md:flex justify-between ">
          <div className="w-full md:w-1/4 mb-5 p-5 border-t-2 border-t-red-600">
            <h6 className="lg:w-1/5 font-semibold ">News</h6>
            <ul>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Nation
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent
                 hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Politics
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent
                 hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  World
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500 "
                  href="#"
                >
                  Solar Eclips
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-5 p-5 border-t-2 border-t-violet-600">
            <h6 className="lg:w-1/5 font-semibold ">Arts</h6>
            <ul>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Art&Design
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent
                 hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Movies
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent
                 hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  People
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500 "
                  href="#"
                >
                  Video:Arts
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500 "
                  href="#"
                >
                  Theatre
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-5 p-5 border-t-2 border-t-blue-600">
            <h6 className="lg:w-1/5 font-semibold ">Travel</h6>
            <ul>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent
                 hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Flights
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent
                 hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Busness Travel
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-5 p-5 border-t-2 border-t-orange-600">
            <h6 className="lg:w-1/5 font-semibold ">Sports</h6>
            <ul>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Olympics
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent
                 hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Motor Sports
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent
                 hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Valeyball
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500 "
                  href="#"
                >
                  Cycling
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-5 p-5 border-t-2 border-t-emerald-600">
            <h6 className="lg:w-1/5 font-semibold ">Tech</h6>
            <ul>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Tech
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent
                 hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Tech columnists
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent
                 hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Tech Review
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500 "
                  href="#"
                >
                  Talking Tech
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-5 p-5 border-t-2 border-t-zinc-600">
            <h6 className="lg:w-1/5 font-semibold ">Moneys</h6>
            <ul>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Markets
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent
                 hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent
                 hover:border-yellow-400 hover:text-yellow-500"
                  href="#"
                >
                  Personal Finance
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500 "
                  href="#"
                >
                  Retirement
                </a>
              </li>
              <li>
                <a
                  class="dark:text-slate-400 transition-all duration-300 
                inline-block py-3 px-2 border-b-4 border-transparent 
                hover:border-yellow-400 hover:text-yellow-500 "
                  href="#"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*section 3*/}
      <section className="border-t border-b mt-10 py-10 px-2 w-full">
        <div className='md:flex'>
          <div className="md:flex w-2/3 md:w-full flex-row gap-6 flex place-content-start pl-30">
            <img
              className="bg-blue-700 text-blue-700 rounded-full" 
              src="/images/UNV.png"
              alt="logo"
            />
            <h6 className="uppercase text-md font-semibold text-black">Contact us</h6>
            <h6 className="uppercase text-md font-semibold text-black">Work with us</h6>
            <h6 className="uppercase text-md font-semibold text-black">Advertise</h6>
            <h6 className="uppercase text-md font-semibold text-black">
              Your ad choise
            </h6>
          </div>

           {/*icons*/}
          <div className="md:w-full w-1/3 md:flex flex justify-end items-center gap-4 pr-30">
            <span>
              <FaFacebook  className='text-blue-800'/>
            </span>
            <span>
              <AiFillTwitterCircle className='text-green-700' />
            </span>
            <span>
              <FaYoutube className='text-red-800'/>
            </span>
            <span>
              <FaInstagram className='text-red-300'/>
            </span>
          </div>
        </div>

       
      </section>
      {/*section 4*/}
      <section className='mt-10 py-10 px-3 md:w-full '>
        <div className='md:flex flex justify-between items-center gap-40'>
          <p className='text-sm text-grey-500 font-sans mr-40 md:w-2/3'>Universal’s business concept is to offer fashion and quality at the best price in a sustainable way. 
            Universal has since it was founded in 2015 grown into one of the world's leading fashion companies. 
            </p>

            <p className="text-sm text-grey-500 font-sans mr-20 md:w-1/3">© 2019 Universal UI Kit</p>
        </div>
        
      </section>
    </div>
  );
};
export default Footer;