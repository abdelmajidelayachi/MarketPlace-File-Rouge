import React from 'react'

function Navigation() {
  return (
    <div>
      <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium lg:text-xl" style={{marginTop:"1rem"}}>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 ">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">New</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Top seller</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">New sellers</a>
        </li>
       
      </ul>
    </div>
  )
}

export default Navigation