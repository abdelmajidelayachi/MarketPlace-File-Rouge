import React from "react";
import AddProductModal from "../admin/AddProductModal";
import Wrapper from "../UI/Wrapper";
import {useState,useEffect} from "react";
import axios from "axios";
import {faPenToSquare,faEye,faTrashCan} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageModal from "../UI/MessageModal";

function ProductsTab() {
  const [addProductModal, setAddProductModal] = React.useState(false);
  const [productDeleted, setProductDeleted] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const [showEditModel, setShowEditModel] = useState(false);

  const ShowAddProductModelHandler = () => {
      setAddProductModal(true);
  }
  const cancelModalHandler = () => {
      setAddProductModal(false);
  }

  const deleteProductHandler = (id) => {
    console.log(id);
    axios.delete(`http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/delete_product/${id}`)
    .then(res => {
      // console.log(res);
      if(res.status=== 200){
        setProductDeleted(true);
      }
      setProductDeleted(true);
  })}

  useEffect( () => {
     axios.get(`http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/get_products/${JSON.parse(localStorage.getItem('user')).id}`).then(res => {  
    setProducts(res.data.products);
    console.log(res.data);
  })}, [addProductModal,productDeleted,showEditModel]);
  
  return (
    <Wrapper>
      {addProductModal &&<AddProductModal edit={false} title="Add Product" product="" buttonText='Add product' onClose={cancelModalHandler} onClick={cancelModalHandler}/>}
      {productDeleted && <MessageModal title="Product Deleted" message="Product Deleted Successfully" onClick={() => setProductDeleted(false)}/>}
      <div className="flex justify-between m-5"> 
        <div className="text-3xl font-bold">Products</div>
        <div> 
          <button onClick={ShowAddProductModelHandler} className="hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Product
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto min-h-full shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
    
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                View
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                delete
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {console.log(products)} */}
            {/* {products.map(product => (
              <tr key={product.id}>
                <td className="px-6 py-4">
                  <div className="text-sm">{product.product_name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">{product.category.name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">{product.price}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">{product.quantity}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">on</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteProductHandler(product.id)} />
                  </div>
                </td>
              </tr>
            ))} */}
            {products
            &&
            products.map(product => (
                <tr className="border-b odd:bg-white even:bg-gray-50" key={product.id} >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                 {product.product_name}
                </th>
                <td className="px-6 py-4 font-semibold">{product.category.name}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-4 py-4">
                  <span className="px-5 py-2 bg-green-200 rounded-full text-green-600">On</span>
                </td>
                <td className="px-1 py-4">
                  <span onClick={()=>setShowProduct(product.id)} className="px-5 py-2 rounded-full cursor-pointer text-mainBlue"><FontAwesomeIcon size="xl" icon={faEye}/></span>
                  {showProduct===product.id && <MessageModal product={product.product_name} message={product.id} title='Edit Product' onClick={()=>setShowProduct(false)}/>}
                </td>

                <td className="px-1 py-4">
                  <span onClick={()=>setShowEditModel(product.id)} className="px-5 py-2 rounded-full cursor-pointer text-green-600"><FontAwesomeIcon size="xl" icon={faPenToSquare}/></span>
                  {showEditModel===product.id && <AddProductModal edit={true} product={product}  buttonText='Update' onClose={()=>setShowEditModel(false)} onClick={()=>setShowEditModel(false)}/>}
                </td>
               
                <td className="px-1 py-4">
                  <span onClick={()=>deleteProductHandler(product.id)} className="px-5 py-2 rounded-full cursor-pointer text-red-600"><FontAwesomeIcon size="xl" icon={faTrashCan}/></span>
                </td>
               
              </tr>
          
          
          ))}
           
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}

export default ProductsTab;
