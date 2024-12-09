import React from 'react'

const Navbar = () => {
  return (
    <>
<div className="text-red-500">
  <ul className="flex items-end justify-end gap-7 p-5">
    <div className="relative rounded-full p-1 hover:bg-green-300 duration-1000">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-green-300 rounded-full blur-md"></div>

      {/* Text */}
      <li className="relative z-10 hover:text-blue-500">HOME</li>
    </div>
  </ul>
</div>

    
    </>
  )
}

export default Navbar