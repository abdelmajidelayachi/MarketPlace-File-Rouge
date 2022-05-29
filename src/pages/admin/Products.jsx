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
        <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
           <HeadBar/>
        </nav>
      </header>
      <main>
        <div className="flex flex-col md:flex-row">
          <nav aria-label="alternative nav">
              <AsideBar />
          </nav>
          <section className="w-full">
          <div className="main-content flex-1 bg-gray-100 mt-10 md:mt-14 pb-24 md:pb-5">
              <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                  <h1 className="font-bold pl-2">Products</h1>
                </div>
              </div>
              <ProductsTab/>
            </div>
        </section>
    </div>
      </main>
    </Wrapper>
  );
}

export default Dashboard;
