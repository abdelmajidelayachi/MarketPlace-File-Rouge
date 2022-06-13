import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/clients/Nav";
import MessageModal from "../../components/UI/MessageModal";
import Wrapper from "../../components/UI/Wrapper";
import Footer from "../../layouts/Footer";
import swal from 'sweetalert';

function AddShop() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const conditionRef = useRef(false)

  if(JSON.parse(localStorage.getItem("user")) === null){
    navigate("/sign-in");
  }



  const addStoreRequest = async(data) => {
    const response = await axios.post("http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/user/add_store", data);
    if(response.data.success){
      localStorage.setItem("user", JSON.stringify(response.data.user));
      swal({
      title: "Good job!",
      text: "Your store has been added successfully!",
      icon: "success",
      button: "OK",
    });
    navigate("/dashboard");
  }
    
  }
  const addStoreHandler = () => {
    const data = new FormData();
     data.append("id", user.id);
      if(conditionRef.current.checked){
        addStoreRequest(data);
        setError(false);
      }else{
        setError(true);

      }
  }




  return (
    <Wrapper>
    
      <div className=" max-w-screen-xl m-auto ">
        <Nav active="add" />
      </div>
      <div className="w-full my-6 bg-gray-100 p-10">
        <div className="max-w-screen-xl mx-auto mb-2 bg-gray-100">
          <div className="w-10/12 flex flex-col justify-center bg-white rounded-sm mx-auto px-10">
          <h1 className="text-xl font-bold text-left flex justify-start pb-5 pt-12">Accept term and conditions</h1>
          <h1 className=" mx-auto text-left">
            Buying used and collectible items from an MShop seller is as easy
            as buying directly from MShop.com. To help you make the best buying
            decision, click the type of product you're interested in below to
            see the conditions sellers use to describe their items: General
            Condition Guidelines The following guidelines apply to all product
            categories unless otherwise indicated within specific categories. <br />
            New: Just like it sounds. A brand-new item. Original manufacturer's
            warranty, if any, still applies, with warranty details included in
            the listing comments. Original packaging is present for most New
            items but certain items may be re-boxed. Renewed: A product that has
            been inspected and tested to work and look like new by an
            MShop-qualified and performance-managed supplier (a Marketplace
            seller or vendor) or by MShop. The product has minimal to no signs
            of wear, no visible cosmetic imperfections when held 12 inches away,
            and may arrive in a brown or white box with relevant accessories
            that may be generic with exceptions, if any, mentioned on the
            product detail page. The product comes with the MShop Renewed
            Guarantee giving you a replacement or refund within 90 days of
            purchase if the product does not work as expected. <br /><br /> Rental: A product
            that has been inspected and graded by a qualified supplier (a
            seller, vendor, or by MShop) in working condition with no
            structural imperfections that could impact the functionality. The
            products may be packaged in a generic box and come with relevant
            accessories as expected for a new product. Any exceptions to this
            condition description will be mentioned on the product detail page.
            Used - Like New or Open Box: An item in perfect working condition.
            Original protective wrapping may be missing, but the original
            packaging is intact and in good condition with minor damage
            possible. Instructions are included. Used - Very Good: A
            well-cared-for item that has seen limited use and remains in good
            working condition. The item may show some limited signs of wear with
            small scratches or cosmetic blemishes. Item may arrive with damaged
            packing or be repackage and could be missing some accessories. <br /><br />
            Missing accessories are clearly defined for each item. Used - Good:
            The item shows wear from consistent use, but it remains in good
            condition and functions properly. Item may arrive with damaged
            packaging or be repackaged. It may be marked, have identifying
            markings on it, or have minor cosmetic damage. It may also be
            missing some parts/accessories such as screws (in the case of
            furniture) or instruction manual. Used - Acceptable: The item is
            fairly worn but continues to function properly. Item may arrive with
            damaged packaging or be repackaged. Signs of wear can include
            aesthetic issues such as scratches, dents, and worn corners. The
            item may have identifying markings on it or show other signs of
            previous use. Item may be missing some parts/accessories such as
            screws (in the case of furniture) or a mouse or USB cable. (in the
            case of a laptop.)
          </h1>
          <div className=" mt-5 flex items-center">

            <input type="checkbox" name="" ref={conditionRef} className="rounded-full  " id="checkBox" />
            <label for='checkBox' className=" before:content-['*'] after:mr-0.5 before:text-red-500" htmlFor="condition">I accept the terms and conditions</label>   
          </div>
            {error && <div className="pl-5 text-red-500 text-sm">Please accept the terms and conditions</div>}
          <div className=" mb-10 mt-5">
            <button onClick={addStoreHandler} className="bg-blue-500 hover:bg-mainBlue text-white font-bold py-2 px-4 rounded-full">
              Continue
            </button>
            </div>
          </div>
         
        </div>
      </div>
        <Footer />
    </Wrapper>
  );
}

export default AddShop;
