//=========================================================================================
//                        ____              _  _____
//                       / ___| _ __   ___ | ||_   _| __ ___  _   _ _ __
//                       \___ \| '_ \ / _ \| __|| || '__/ _ \| | | | '_ \
//                        ___) | |_) | (_) | |_ | || | | (_) | |_| | |_) |
//                       |____/| .__/ \___/ \__||_||_|  \___/ \__,_| .__/
//                             |_|                                 |_|
// create with figlet 
//
// Name: index.js 
// Comments: JS file for the  historyloader to get the Table
// Author: Tjark Ziehm
// Version: 0.01
// Date: 25.Dez. 2020
// CoWorkers:
//=========================================================================================

/*
* TODO: 

*/

//=========================================================================================
// Structure 
//=========================================================================================

/**
* Index

*/

//========================================================================================

const Table = () => (

<div class="card m-3 rounded">
      <table class="min-w-full table-auto">
        <thead class="justify-between">
          <tr class="bg-gray-800">
            <th class="px-16 py-2">
              <span class="text-gray-300"></span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">ParkingSpace</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">ReOrder</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Date</span>
            </th>

            <th class="px-16 py-2">
              <span class="text-gray-300">Time</span>
            </th>

            <th class="px-16 py-2">
              <span class="text-gray-300">Status</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
          <tr class="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
              <img
                class="h-8 w-8 rounded-full object-cover "
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt=""
              />
            </td>
            <td>
              <span class="text-center ml-2 font-semibold">Kiel,24118, Gutenbergstrasse</span>
            </td>
            <td class="px-16 py-2">
              <button class="bg-gray-400 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                order
              </button>
            </td>
            <td class="px-16 py-2">
              <span>05/07/2021</span>
            </td>
            <td class="px-16 py-2">
              <span>09:32</span>
            </td>

            <td class="px-16 py-2">
              <span class="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h5 "
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </span>
            </td>
          </tr>
          <tr class="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
            <img
                  class="h-8 w-8 rounded-full object-cover "
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  alt=""
                />
            </td>
            <td>
              <span class="text-center ml-2 font-semibold">Kiel,24103, Bergstrasse</span>
            </td>
            <td class="px-16 py-2">
              <button class="bg-gray-400 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                order
              </button>
            </td>
            <td class="px-16 py-2">
              <span>02/01/2021</span>
            </td>
            <td class="px-16 py-2">
              <span>17:42</span>
            </td>

            <td class="px-16 py-2">
              <span class="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
              </span>
            </td>
          </tr>
          <tr class="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
            <img
                  class="h-8 w-8 rounded-full object-cover "
                  src="https://randomuser.me/api/portraits/men/38.jpg"
                  alt=""
                />
            </td>
            <td>
              <span class="text-center ml-2 font-semibold">Kiel,24149,Boksberg</span>
            </td>
            <td class="px-16 py-2">
              <button class="bg-gray-400 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                order
              </button>
            </td>
            <td class="px-16 py-2">
              <span>12/01/2021</span>
            </td>
            <td class="px-16 py-2">
              <span>13:00</span>
            </td>

            <td class="px-16 py-2">
              <span class="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

)

export default Table;