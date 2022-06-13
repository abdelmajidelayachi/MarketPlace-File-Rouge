import React from "react";
import AsideBar from "../../components/admin/AsideBar";
import HeadBar from "../../components/admin/HeadBar";
import ProductsTab from "../../components/product/ProductsTab";
import Wrapper from "../../components/UI/Wrapper";

function Dashboard() {
  return (
    
    <Wrapper>
      <header>
        {/* Nav */}
        <nav className="bg-gray-50 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
           <HeadBar/>
        </nav>
      </header>
      <main>
        <div className="flex flex-col md:flex-row">
          <nav aria-label="alternative nav">
              <AsideBar active="products" />
          </nav>
          <section className="w-full">
          <div className="main-content flex-1 bg-gray-100 min-h-screen mt-10 md:mt-14 p-10 pb-24 ">
              
              <ProductsTab/>
            </div>
        </section>
    </div>
      </main>
    </Wrapper>
  );
}

export default Dashboard;
