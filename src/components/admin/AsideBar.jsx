import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faSquarePollVertical} from '@fortawesome/free-solid-svg-icons'
import {faBoxesStacked} from '@fortawesome/free-solid-svg-icons'
import {faGear,faRightToBracket} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function AsideBar() {
  return (
    <>
         <div className="bg-mainBlue shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
              <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                  <li className="mr-3 flex-1">
                    <Link
                      to="/dashboard"
                      className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
                    >
                      <FontAwesomeIcon size='lg' icon={faSquarePollVertical} />
                      <span className="pb-1 md:pb-0 md:pl-3 pr-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                        Dashboard
                      </span>
                    </Link>
                  </li>
                  <li className="mr-3 flex-1">
                    <Link
                      to="/dashboard/products"
                      className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
                    >
                      <FontAwesomeIcon size='lg' icon={faBoxesStacked} />
                      <span className="pb-1 md:pb-0 md:pl-2 text-xs md:text-base text-white md:text-white block md:inline-block">
                        Products
                      </span>
                    </Link>
                  </li>
                  <li className="mr-3 flex-1">
                    <a
                      href="/"
                      className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600"
                    >
                      <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i>
                      <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                        Orders
                      </span>
                    </a>
                  </li>
                  <li className="mr-3 flex-1">
                    <a
                      href="/"
                      className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
                    >
                      <i className="fa fa-wallet pr-0 md:pr-3"></i>
                      <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                        Transactions
                      </span>
                    </a>
                  </li>
                  <li className="mr-3 flex-1">
                    <a
                      href="/"
                      className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
                    >
                      <FontAwesomeIcon size='lg' icon={faGear} />
                      <span className="pb-1 md:pb-0 text-xs md:pl-2 md:text-base text-white md:text-white block md:inline-block">
                        Setting
                      </span>
                    </a>
                  </li>
                  <li className="mr-3 md:flex-1 md:block hidden">
                    <a
                      href="/"
                      className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
                    >
                      <FontAwesomeIcon size='lg' icon={faRightToBracket} />
                      <span className="pb-1 md:pl-2 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                        Logout
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
      
    </>
  )
}

export default AsideBar