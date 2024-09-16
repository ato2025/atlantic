"use client"
import React, { useState } from 'react'

function HomeBanner() {
  const [trackingValue, setTrackingValue] = useState("");
  return (
    <>
    <div className="mainBannenr">
      <div className="grid grid-cols-1 lg:!grid-cols-2 px-4 lg:px-20 py-10 lg:py-28  bg-[#000000a1]">
        <div className="flex flex-col gap-8">
          <div className="text-white text-4xl lg:text-8xl font-semibold">Atlantic</div>
          <div className="text-white lg:text-black text-3xl lg:text-5xl">maritime</div>
          <div className="text-white text-2xl lg:text-4xl">Shipping Services</div>
          <p className="text-white lg:text-black text-base lg:text-lg w-1/2">
            Track your shipment online with ease. Enter your BL number to get real-time updates on your delivery status.
          </p>
          <div className="w-full lg:w-2/3 h-fit relative p-1 gradient1 rounded-lg">
            <input type="text" className="w-full bg-transparent outline-none border-0 text-white px-4 py-2" value={trackingValue} onChange={(e) => {
              setTrackingValue(e.target.value);
            }}
            placeholder='Enter Bl Number' />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg absolute right-2 top-1">Tracking Now</button>
          </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default HomeBanner