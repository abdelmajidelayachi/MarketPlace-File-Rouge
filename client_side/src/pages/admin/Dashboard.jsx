import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Analytics from "../../components/admin/Analytics";
import AsideBar from "../../components/admin/AsideBar";
import HeadBar from "../../components/admin/HeadBar";
import Wrapper from "../../components/UI/Wrapper";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) === null) {
      navigate("/sign-in");
    }
    if (JSON.parse(localStorage.getItem("user")).role !== "seller") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Wrapper>
      <header>
        {/* Nav */}
        <nav className="bg-gray-50 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
          <HeadBar />
        </nav>
      </header>
      <main>
        <div className="flex flex-col md:flex-row">
          <nav aria-label="alternative nav">
            <AsideBar active="dashboard" />
          </nav>
          <section className="w-full ">
            <div className="main-content flex-1 bg-gray-100 mt-10 pt-8 md:mt-14 md:px-10  min-h-screen pb-24">
              <div className="flex justify-between md:m-5 my-14 text-mainBlue">
                <div className="text-3xl font-bold">Analytics</div>
              </div>
              <Analytics />
            </div>
          </section>
        </div>
      </main>
    </Wrapper>
  );
}

export default Dashboard;
