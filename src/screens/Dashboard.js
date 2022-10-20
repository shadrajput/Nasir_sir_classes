import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Cards from "../asset/cards";
import { AiFillEye } from "react-icons/ai";
import { MdLocalPrintshop } from "react-icons/md";
import { Tooltip } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";



// function Remove() {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire("Deleted!", "Your file has been deleted.", "success");
//     }
//   });
// }

export default function Dashboard() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="">
      <div className=" ">
        <div className="flex justify-between items-center pr-5 pt-8  md:pl-8 space-y-5">
          <h1 className=" text-xl md:text-3xl text-center md:text-left text-darkblue-500 font-semibold ">
            Welcome Nasir
          </h1>
         
        </div>
      </div>
      <div className="pt-0 md:flex items-center justify-center md:justify-between mr-5 ">
        <div className="left pt-0 ">
          <img src="/images/desk.webp" alt="" className="" />
        </div>
        <Cards />
      </div>
      <div className="flex justify-center items-center p-10 pt-0">
        <div class="overflow-x-auto relative  sm:rounded-lg bg-white p-10 shadow-xl space-y-5 w-full">
          <div className="print-btn flex items-center space-x-3">
            <button
              id="year-btn"
              className=" flex items-center border bg-white p-2 md:p-2 md:py-1 rounded-lg shadow-2xl space-x-1 "
            >
              <select
                name=""
                id=""
                className="cursor-pointer text-darkblue-500 text-xs md:text-lg outline-none"
              >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Paidup">Paidup</option>
              </select>
            </button>

            <Tooltip
              content="Print"
              placement="bottom-end"
              className="text-white bg-black  p-2"
            >
              <a
                href="#"
                id="print"
                class="text-3xl bg-class2-50 rounded-md text-white  w-10 h-8 flex justify-center  " onClick={handlePrint}
              >
                <MdLocalPrintshop />
              </a>
            </Tooltip>

          </div>
          <div ref={componentRef} className='p-5 pt-3 pb-0'>
          <table class="w-full text-sm text-center bg-class2-50 rounded-xl shadow-xl " >
            <thead class="text-xs text-gray-700 uppercase">
              <tr className="text-white text-base">
                <th scope="col" class="w-20 h-20">
                  Profile
                </th>
                <th scope="col" class="w-20 h-20">
                  Class
                </th>
                <th scope="col" class="w-20 h-20">
                  Phone
                </th>
                <th scope="col" class="w-20 h-20">
                  Total
                </th>
                <th scope="col" class="w-20 h-20">
                  Paidup
                </th>
                <th scope="col" class="w-20 h-20">
                  Pending
                </th>
                <th scope="col" class="w-20 h-20">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white border items-center ">
              <tr class=" border-b">
                <th scope="row" class="w-20 h-20">
                  <div className="flex justify-center items-center space-x-2">
                    <img
                      className="h-1/3 w-1/3 rounded-full"
                      src="../images/user.png"
                      alt="profile"
                    />
                    <div>
                      <p className="text-darkblue-500">Deepak</p>
                      <p className="text-gray-500">01</p>
                    </div>
                  </div>
                </th>
                <td class="w-20 h-20">12</td>
                <td class="w-20 h-20">1234567891</td>
                <td class="w-20 h-20">20000</td>
                <td class="w-20 h-20">10000</td>
                <td class="w-20 h-20">10000</td>
                <td class="w-20 h-20 ">
                  <div className="flex justify-center space-x-2">
                    <NavLink className="nav-link" to="Profilestudent">
                      <Tooltip
                        content="Show"
                        placement="bottom-end"
                        className="text-white bg-black rounded p-2"
                      >
                        <a href="#" class="text-xl text-darkblue-500">
                          <AiFillEye />
                        </a>
                      </Tooltip>
                    </NavLink>
                    {/* <Tooltip
                      content="Remove"
                      placement="bottom-end"
                      className="text-white bg-black rounded p-2"
                    >
                      <div
                        href="#"
                        class="text-xl text-red-600 cursor-pointer"
                       
                      >
                        <MdDelete />
                      </div>
                    </Tooltip> */}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <nav
            aria-label="Page navigation example"
            className="flex justify-end"
          >
            <ul class="inline-flex items-center -space-x-px ">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
