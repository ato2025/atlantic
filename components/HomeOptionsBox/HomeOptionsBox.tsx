import React from 'react'
interface props{
   
}
function HomeOptionsBox({ }:props) {
  return (
   <div className='bg-white flex flex-col justify-between items-start p-5 rounded-lg shadow-md shadow-blue-500'>
   <img src="./o1.png" alt="" />
   <div className='text-blue-500 text-xl'>Exceptional Customer Support: </div>
   <p className='text-black text-base'>Our team is here to assist you at every step.</p>
</div>
  )
}

export default HomeOptionsBox