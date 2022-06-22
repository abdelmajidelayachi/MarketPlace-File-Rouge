import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPages, setNumberPages] = useState([]);
  const [pages, setPages] = useState(0);

  const location = useLocation();

  const navigate = useNavigate();

  const getNumberOfProduct = async () => {
    const { data } = await axios.get(
      `http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/count_all_products`
    );
    if (data[0] > 0) {
      setPages(data[0]);
      let array = [];
      for (let index = 1; index <= Math.ceil(data[0] / 8); index++) {
        array.push(index);
      }
      setNumberPages(array);
    }
  };
  useEffect(() => {
    setCurrentPage(
      !isNaN(window.location.href.split("=").at(-1))
        ? window.location.href.split("=").at(-1)
        : 1
    );
    getNumberOfProduct();
  }, [location]);

  const previousPaginateHandler = () => {
    if (currentPage <= 1 || currentPage > numberPages.length) {
      navigate(`/${props.page}?page=${numberPages.length}`);
    } else {
      navigate(`/${props.page}?page=${currentPage - 1}`);
    }
  };
  const nextPaginateHandler = () => {
    if (currentPage >= numberPages.length || currentPage < 1) {
      navigate(`/${props.page}?page=${1}`);
    } else {
      navigate(`/${props.page}?page=${parseInt(currentPage) + 1}`);
    }
  };

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Previous
        </button>
        <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {(parseInt(currentPage) - 1) * 8 + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {parseInt(currentPage) * 8 > pages
                ? pages
                : parseInt(currentPage) * 8}
            </span>{" "}
            of <span className="font-medium">{pages}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={previousPaginateHandler}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {numberPages.length > 0 &&
              numberPages.map((link) => {
                return (
                  <Link
                    to={`/${props.page}?page=${link}`}
                    key={link}
                    aria-current="page"
                    className={`z-10 ${
                      currentPage == parseInt(link)
                        ? "bg-indigo-50 border-indigo-500 text-indigo-600"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                    } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                  >
                    {link}
                  </Link>
                );
              })}
            <button
              onClick={nextPaginateHandler}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
