import React, { ReactNode } from 'react'
type props= {
   title?:string
   icon?:ReactNode,
   shadowColor?:string
   bgColor?:string
}
function CustomBtn({icon,title,shadowColor,bgColor}:props) {
   return (
      <button className={`${bgColor?bgColor:"bg-customBlue"} px-4 py-2 flex gap-2 items-center text-lg rounded-lg font-semibold text-black shadow-lg ${shadowColor ?shadowColor:"shadow-shadow"}`}>
         {title && title} {icon && icon}
      </button>
   )
}

export default CustomBtn