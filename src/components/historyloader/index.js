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
// Comments: JS file for the  historyloader at the home side
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

//=========================================================================================
import { comment } from 'postcss';
import { h } from 'preact';
import Table from './table.js';
import './style.css';



const HistoryLoader = () => (

    <div class="container bg-gray-400 rounded-xl overflow-hidden shadow-xl border-black opacity-95 mb-2">
        <div class="card shadow-2xl">
            <div class="col-span-1 flex justify-between ">
                <div class="ml-3 p-3">
                    <svg class="svgbtn w-10 inline-block hover:bg-gray-300 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>

                    <span class="btn  inline-block ml-2 mr-2 hover:bg-gray-300">today</span>
                    <svg class="svgbtn w-10 inline-block hover:bg-gray-300 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div class="w-96  p-3">
                    <svg class="svgbtn w-10 inline-block hover:bg-gray-300 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div class="btn w-16 inline-block ml-2 mr-2 hover:bg-gray-300">check</div>
                    <div class="btn w-16 inline-block hover:bg-gray-300">block</div>
                </div>
            </div>

            <Table />

        </div>
    </div>
);

export default HistoryLoader;





