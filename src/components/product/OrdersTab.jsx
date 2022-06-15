import React from "react";
import Wrapper from "../UI/Wrapper";
import { useState, useEffect } from "react";
import axios from "axios";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DetailsProductModal from "../Modals/DetailsProductModal";

function OrdersTab() {
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/order/get_orders/${
          JSON.parse(localStorage.getItem("user")).id
        }`
      )
      .then((res) => {
        setOrders(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <Wrapper>
      {/* {productDeleted && <MessageModal title="Product Deleted" message="Product Deleted Successfully" onClick={() => setProductDeleted(false)}/>} */}
      <div className="flex justify-between md:m-5 my-14 text-mainBlue">
        <div className="text-3xl font-bold">Orders</div>
      </div>
      <div className="relative overflow-x-auto min-h-full shadow sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order_id
              </th>

              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                city/country
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                products
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr className="border-b odd:bg-white even:bg-gray-50" key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {order.order_id}
                </th>
                <td className="px-6 py-4">
                  {order.first_name + " " + order.last_name}
                </td>
                <td className="px-6 py-4">{order.address}</td>
                <td className="px-6 py-4">
                  {order.city + "," + order.country}
                </td>
                <td className="px-4 py-4">
                  <span className="px-5 py-2 bg-green-200 rounded-full text-green-600">
                    passed
                  </span>
                </td>
                <td className="px-1 py-4">
                  <span
                    onClick={() => setShowOrders(order.id)}
                    className="px-5 py-2 rounded-full cursor-pointer text-mainBlue"
                  >
                    <FontAwesomeIcon size="xl" icon={faEye} />
                  </span>
                 
                  {showOrders === order.id && (
                    <DetailsProductModal
                    product={{
                      productName:order.product_name,
                      categoryName:order.category.name,
                      image : order.images[0].path,
                      status:order.status,
                      quantity : order.quantity_ordered_products,
                      description : order.description,
                      price : order.price,
  
                    } 
                    }
                      
                      title="Show ordered products"
                      onClick={() => setShowOrders(false)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}

export default OrdersTab;
