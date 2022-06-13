import React, { useEffect } from "react";

// import Axios for send request to server
import axios from "axios";

function Analytics() {

  const [data, setData] = React.useState([]);

  const getStatistics = async (idUser) => {
    const {data}=await axios.get("http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/get_statistics/"+idUser);
    setData(data);
  }
  useEffect(() => {
    const idUser = JSON.parse(localStorage.getItem('user')).id;
    console.log(idUser);
    getStatistics(idUser);

  },[]);

  return (
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/* <!--Metric Card--> */}
          <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-green-600">
                  <i className="fa fa-wallet fa-2x fa-inverse"></i>
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h2 className="font-bold uppercase text-gray-600">
                  Total Revenue
                </h2>
                <p className="font-bold text-3xl">
                  $3249{" "}
                  <span className="text-green-500">
                    <i className="fas fa-caret-up"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* <!--/Metric Card--> */}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/* <!--Metric Card--> */}
          <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-pink-600">
                  <i className="fas fa-users fa-2x fa-inverse"></i>
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h2 className="font-bold uppercase text-gray-600">
                  Total Users
                </h2>
                <p className="font-bold text-3xl">
                  249{" "}
                  <span className="text-pink-500">
                    <i className="fas fa-exchange-alt"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* <!--/Metric Card--> */}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/* <!--Metric Card--> */}
          <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-yellow-600">
                  <i className="fas fa-user-plus fa-2x fa-inverse"></i>
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h2 className="font-bold uppercase text-gray-600">New Users</h2>
                <p className="font-bold text-3xl">
                  2{" "}
                  <span className="text-yellow-600">
                    <i className="fas fa-caret-up"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* <!--/Metric Card--> */}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/* <!--Metric Card--> */}
          <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-blue-600">
                  <i className="fas fa-server fa-2x fa-inverse"></i>
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h2 className="font-bold uppercase text-gray-600">
                  Server Uptime
                </h2>
                <p className="font-bold text-3xl">152 days</p>
              </div>
            </div>
          </div>
          {/* <!--/Metric Card--> */}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/* <!--Metric Card--> */}
          <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-indigo-600">
                  <i className="fas fa-tasks fa-2x fa-inverse"></i>
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h2 className="font-bold uppercase text-gray-600">
                  To Do List
                </h2>
                <p className="font-bold text-3xl">7 tasks</p>
              </div>
            </div>
          </div>
          {/* <!--/Metric Card--> */}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/* <!--Metric Card--> */}
          <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-red-600">
                  <i className="fas fa-inbox fa-2x fa-inverse"></i>
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h2 className="font-bold uppercase text-gray-600">Issues</h2>
                <p className="font-bold text-3xl">
                  3{" "}
                  <span className="text-red-500">
                    <i className="fas fa-caret-up"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* <!--/Metric Card--> */}
        </div>
    </div>
  );
}

export default Analytics;
