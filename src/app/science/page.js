import Link from 'next/link'
import React from 'react'
import '../component/home.css'

const SciencePage = () => {
  return (

    <main className='lg:flex'>    
      <div className='bg-gray-300 flex w-full'>
        <section className='px-2 w-full lg:w-3/4'>
           <div className='mb-10 block w-4/5 lg:flex flex-wrap space-x-10' href='#'>
                {/* car */}
                <div className='flex flex-row'>
                   <div className='colum1 flex ml-40 mt-40 space-x-2 flex-wrap relative '>
              <div className='flex flex-row justify-between'>
                <div>
                <Link className='text-sm text-gray-500 uppercase' href={'/'}>Cars</Link>
                <h2 className='text-2xl font-bold mt-2'>The joy of replicas: A $ 5 million car for $ 50,000</h2>
                <p className='text-gray-600 mt-4'>The 31-year-old self-taught engineer and former amateur racer 
                 spends his days building artful recreations of one of most iconic sports cars
                </p>
               </div>
                  <img className='object-cover rounded-lg w-60 h-48' 
                      src='/images/cb4d23b008b30e89346bbabff7bfecc8.png' 
                      alt='car'/> 
               </div>
                  <div className='flex mt-4'>
                  <img class="h-10 w-10 rounded-full mr-2 object-cover " 
                  src="https://randomuser.me/api/portraits/men/7.jpg" 
                   alt="author"/>
                   <div>
                    <p className="ml-3 text-gray-500">Jessica Miller: 
                   Even as the ride-hailing service's future remains 
                   in flux...
                  </p> 
                   </div>
                  </div>
              
               </div>

               {/* hand */}      
              <div className='mt-40 ml-10 relative'>
                 <div></div>
                     <img className='colum2  rounded-lg object-cover' src='/images/be935bbee983c7b4d199a53dcdf2d444.png'/>
                <div className='absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-lg'>
                  <Link className='bg-green-500 text-white px-3 py-1 text-sm rounded-full'  href={'/'}>Popular</Link>
                  <p className="text-white mt-2 text-sm">Art & Design</p>
                   <h1 className="text-white text-lg font-bold mt-1">Invisible ink: the weird world of tattoo removal – in pictures</h1>
                  <div className='flex items-center mt-4 text-sm text-gray-300'>
                 <img class="h-10 w-10 rounded-full mr-2 object-cover " 
                   src="https://randomuser.me/api/portraits/women/3.jpg" 
                    alt="author"/>
                    <p className="ml-3">By Sarah Jenkins | Sep 26 | 16 | 832</p>
                   </div>
                    </div>
              </div>
                </div>
             
                 
    
      
                {/* cat */}
                <div className='flex flex-row px-20 '>
                  <div className='mt-20 w-56 h-72 ml-10 '>
                 <div>
                   <img src='/images/dbdc137248074dfcec4bc785e088a5b1.png'/>
                 </div>
                   <div>
                    <p className='font-semibold text-black'>200+ Doomed Cats Saved From Euthanization</p>
                   </div>
                  </div>

              <div className="column4 mt-20 flex justify-center items-center flex-wrap gap-5 ml-10">
                  <div className='w-56 h-40 bg-blue-100 border-dashed rounded-lg'>
                  <h1 className='font-bold '>Is Coffee Bad for Bones?</h1>
                  <p>Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones</p>
                  </div>
                   <div className='w-56 h-40 bg-blue-100 border-dashed rounded-lg '>
                     <h1>What We Manufacture</h1>
                     <p>A global history of the factory and the modern world that all should read</p>
                   </div>
                  <div className='w-56 h-40 bg-blue-100 border-dashed rounded-lg'>
                  <h1>It’s a Stressful World</h1>
                  <p>Can a cruise skeptic enjoy four days on the seas with his family and a bunch of princesses?</p>
                  </div>
                  <div className='w-56 h-40 bg-blue-100 border-dashed rounded-lg'>
                  <h1>A Treat for Lemon Lovers</h1>
                  <p>This tangerine, ginger and chocolate tart has verve, depth and a hint of spice</p>
                   </div>
                  </div>
                </div>
          </div>
           
    </section>

          <aside className='w-full lg:w-1/4 md:flex md:space-x-6 block lg:space-x-0 px-4 pr-8 '>
        
              <div className='w-full md:w-1/2 lg:w-full mb-5 mr-40 mt-40'>
                <div className='bg-blue-500 p-4 rounded-lg py-4 px-1 border-y border-white transition-all duration-300 hover:border-grey-200'>
                  <h2 className='text-xl font-semibold'>Columns</h2>
                 <p>Architecture is the thoughtful making of space</p>
                 <div class="flex mt-3 ">
                  <img class="h-10 w-10 rounded-full 
                  mr-2 object-cover " 
                  src="https://randomuser.me/api/portraits/men/6.jpg" 
                  alt="author"/>
                  <div>
                    <p class="font-semibold text-gray-200 text-sm">John Doe</p>
                    <time class=" text-gray-400">23 august</time>
                  </div>
                </div>
                 </div>

                
                    <div className='bg-blue-500 p-4 rounded-lg py-4 px-1 border-y border-white transition-all duration-300 hover:border-grey-200'>
                      <p>Live life to the fullest, and focus on the positive</p>
                       <div class="flex mt-3 ">
                        <img class="h-10 w-10 rounded-full mr-2 object-cover " src="https://randomuser.me/api/portraits/men/6.jpg" alt="author"/>
                       <div>
                         <p class="font-semibold text-gray-200 text-sm">John Doe</p>
                        <time class=" text-gray-400">23 august</time>
                       </div>
                      </div>
                    </div>
                       
                     <div className='bg-blue-500 p-4 rounded-lg py-4 px-1 border-y border-white transition-all duration-300 hover:border-grey-200'>
                        <p>The details are not the details. They make the design.</p>

                        <div class="flex mt-3 ">
                          <img class="h-10 w-10 rounded-full mr-2 object-cover " src="https://randomuser.me/api/portraits/men/6.jpg" alt="author"/>
                          <div>
                         <p class="font-semibold text-gray-200 text-sm">John Doe</p>
                         <time class=" text-gray-400">23 august</time>
                      </div>
                     </div>
                       </div>
                         
           </div>
      </aside>

     
    </div> 
    </main>
  
  )
}

export default SciencePage;