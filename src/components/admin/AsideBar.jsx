import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faSquarePollVertical} from '@fortawesome/free-solid-svg-icons'
import {faBoxesStacked} from '@fortawesome/free-solid-svg-icons'
import {faGear,faRightToBracket} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function AsideBar(props) {
  return (
    <>
         <div className="bg-gray-50 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:min-h-full z-10 w-full md:w-48 content-center">
              <div className="md:mt-12 md:w-48 bg-gray-50 md:fixed md:left-0 md:top-0 md:min-h-screen content-center md:content-start text-left justify-between ml-5">
                <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 md:pt-10 md:gap-4 text-center md:text-left">
                  <li className="mr-3 flex-1">
                    <Link
                      to="/dashboard"
                      className={`block py-1 md:py-3 pl-1 align-middle no-underline ${props.active==="dashboard"? "bg-mainBlue text-white pl-2 p-4 rounded-md font-semibold" : "pl-2" } hover:border-mainBlue`}
                    >
                      <FontAwesomeIcon size='lg' className={`${props.active==="dashboard"? "text-white" : "" }`} icon={faSquarePollVertical} />
                      <span className="pb-1 md:pb-0 md:pl-3 pr-0 text-xs md:text-base block md:inline-block">
                        Dashboard
                      </span>
                    </Link>
                  </li>
                  <li className="mr-3 flex-1">
                    <Link
                      to="/dashboard/products"
                      className={`block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline ${props.active==="products"? "bg-mainBlue text-white pl-2 p-4 rounded-md font-semibold" :"pl-2" } derline hover:border-mainBlue`}
                    >
                      <FontAwesomeIcon size='lg' className={`${props.active==="products"? "text-white" : "" }`} icon={faBoxesStacked} />
                      <span className="pb-1 md:pb-0 md:pl-2 text-xs md:text-base block md:inline-block">
                        Products
                      </span>
                    </Link>
                  </li>
                  <li className="mr-3 flex-1">
                    <Link
                      to="/dashboard/orders"
                      className={`block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline ${props.active==="orders"? "bg-mainBlue text-white pl-2 p-4 rounded-md font-semibold" :"pl-2" } derline hover:border-mainBlue`}
                    >
                      <i className="fas fa-chart-area pr-0 md:pr-3"></i>
                      <span className="pb-1 md:pb-0 text-xs md:text-base block md:inline-block">
                        Orders
                      </span>
                    </Link>
                  </li>
                  <li className="mr-3 flex-1">
                    <Link
                      to="/dashboard/transactions"
                      className={`block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline ${props.active==="transactions"? "bg-mainBlue text-white pl-2 p-4 rounded-md font-semibold" :"pl-2" } derline hover:border-mainBlue`}
                    >
                      <i className="fa fa-wallet pr-0 md:pr-3"></i>
                      <span className="pb-1 md:pb-0 text-xs md:text-base block md:inline-block">
                        Transactions
                      </span>
                    </Link>
                  </li>
                  <li className="mr-3 flex-1">
                    <Link 
                      to="/dashboard/setting"
                      className={`block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline ${props.active==="setting"? "border-mainBlue" :"pl-2" } derline hover:border-mainBlue`}
                    >
                      <FontAwesomeIcon size='lg' className={`${props.active==="setting"? "text-white" : "" }`} icon={faGear} />
                      <span className="pb-1 md:pb-0 text-xs md:pl-2 md:text-base block md:inline-block">
                        Setting
                      </span>
                    </Link>
                  </li>
                  <li className="mr-3 md:flex-1 md:block hidden">
                    <Link
                      to="/dashboard/"
                      className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-gray-800 no-underline hover:border-mainBlue"
                    >
                      <FontAwesomeIcon size='lg' className={`${props.active==="logout"? "text-white pl-2" : "pl-2" }`} icon={faRightToBracket} />
                      <span className="pb-1 md:pl-2 md:pb-0 text-xs md:text-base block md:inline-block">
                        Logout
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
      
    </>
  )
}

export default AsideBar