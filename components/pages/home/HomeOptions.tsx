"use client"
import React from 'react'

function HomeOptions() {

const option = [
   {id:1,title:'Exceptional Customer Support', img:'./o1.png',desc:"Our team is here to assist you at every step."},
   {id:2,title:'Exceptional Customer Support', img:'./o1.png',desc:"Our team is here to assist you at every step."},
   {id:3,title:'Exceptional Customer Support', img:'./o1.png',desc:"Our team is here to assist you at every step."},
   {id:4,title:'Exceptional Customer Support', img:'./o1.png',desc:"Our team is here to assist you at every step."},
   {id:5,title:'Exceptional Customer Support', img:'./o1.png',desc:"Our team is here to assist you at every step."},
]

   return (
      <div className='gradient2 px-4 lg:px-20 py-10 mt-10 lg:mt-16'>
         <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
            <div className='col-span-3 text-xl lg:text-5xl text-white'>
               Choose Atlantic Shipping for seamless, trustworthy, and cost-effective shipping solutions.
            </div>
            <div className='col-span-1'>
               <div className='bg-white flex flex-col justify-between items-start p-5 rounded-lg shadow-md shadow-blue-500'>
                  <img src="./o1.png" alt="" />
                  <div className='text-blue-500 text-xl'>Exceptional Customer Support: </div>
                  <p className='text-black text-base'>Our team is here to assist you at every step.</p>
               </div>
            </div>

         </div>
      </div>
   )
}

export default HomeOptions