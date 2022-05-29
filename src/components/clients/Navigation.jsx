import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../UI/Wrapper'

function Navigation() {
  return (
    <Wrapper className="flex justify-center pb-3">
      <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium lg:text-xl" style={{marginTop:"1rem"}}>
        <li>
          <Link to="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 ">Home</Link>
        </li>
        <li>
          <Link to="/new-products" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">New</Link>
        </li>
        <li>
          <Link to="/top-seller" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Top seller</Link>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Navigation