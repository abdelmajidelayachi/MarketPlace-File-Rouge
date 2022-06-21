import React, { useEffect, useState } from "react";

// import Axios for send request to server
import axios from "axios";
import LineChart from "../Chart/LineChart";
import DoughnutChart from "../Chart/DoughnutChart";

function Analytics() {
  const [dataAnalytic, setDataAnalytic] = useState(null);
  const [chartDoughnutData, setChartDoughnutData] = useState(null);
  const [charLineData, setChartLineData] = useState(null);

  const getStatistics = async (idUser) => {
    const { data } = await axios.get(
      "http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/analytic/get_statistics/" +
        idUser
    );
    setDataAnalytic(data.data);
    console.log(data.data);
  };

  const getChartDoughnut = async (idUser) => {
    const { data } = await axios.get(
      "http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/analytic/get_chart_doughnuts/" +
        idUser
    );
    setChartDoughnutData(data.data);
  };

  const getChartLine = async (idUser) => {
    const { data } = await axios.get(
      "http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/analytic/get_chart_line/" +
        idUser
    );
    setChartLineData(data);
  };

  useEffect(() => {
    const idUser = JSON.parse(localStorage.getItem("user")).id;
    getStatistics(idUser);
    getChartDoughnut(idUser);
    getChartLine(idUser);
  }, []);

  return (
    <div className="flex flex-wrap w-full">
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
                $
                {dataAnalytic && dataAnalytic.total_amount.total > 0
                  ? dataAnalytic.total_amount.total.toFixed(2)
                  : 0}{" "}
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
              <h2 className="font-bold uppercase text-gray-600">Total Users</h2>
              <p className="font-bold text-3xl">
                {dataAnalytic && dataAnalytic.users.total}{" "}
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
              <p className="font-bold text-3xl">
                {dataAnalytic && dataAnalytic.store_create_at} days
              </p>
            </div>
          </div>
        </div>
        {/* <!--/Metric Card--> */}
      </div>
      <div className="w-full flex md:flex-row flex-col justify-between">
        <div className="flex md:w-1/2 mx-3">
          {charLineData && <LineChart data={charLineData} />}
        </div>
        <div className="flex md:w-1/2 mx-3">
          <div className="w-72 mx-auto mt-7">
            {chartDoughnutData && <DoughnutChart data={chartDoughnutData} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
