//=========================================================================================
//                        ____              _  _____
//                       / ___| _ __   ___ | ||_   _| __ ___  _   _ _ __
//                       \___ \| '_ \ / _ \| __|| || '__/ _ \| | | | '_ \
//                        ___) | |_) | (_) | |_ | || | | (_) | |_| | |_) |
//                       |____/| .__/ \___/ \__||_||_|  \___/ \__,_| .__/
//                             |_|                                 |_|
// create with figlet 
//
// Name: index.js for the Header in the App
// Comments: JS file for AppFind
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
* @class S
* @constructor 
* @extends 
* @functions
* @useEffect to prevend window undefind errors
* @return
*/

//=========================================================================================

import { Router } from 'preact-router';
import { h } from 'preact';
import { Link } from 'preact-router/match';
import Banner from '../banner/index.js';
import './style.css';



// const Header = () => (
// 	<header role="banner" class="px-0  container mx-auto flex flex-col justify-center bg-gray-400 rounded-md">
// 		<div class="flex flex-wrap lg:px-4">
// 			<div class="my-2 pr-2 w-5/12 lg:w-3/12 overflow-hidden">
// 				<div class="flex  justify-center ml-4 lg:ml-0">
// 					<a href="/">
// 						<img class="md:pl-6" src="../../assets/icons/apple-icon-76x76.png" />
// 					</a>
// 				</div>
// 			</div>
// 			<div class="w-5/12 lg:hidden"></div>
// 			<div class=" px-2 w-2/12 lg:hidden flex flex-row">
// 				<div class="self-center block mr-4 w-full">
// 					<button id="nav-toggle" class="text-first" aria-haspopup="true" aria-expanded="false" aria-controls="menu" aria-label="Navigation">
// 						<img class="open w-1/2 align-end" src="https://www.flaticon.com/svg/static/icons/svg/1828/1828859.svg" />
// 						<img class="close hidden w-1/2" src="https://www.flaticon.com/svg/static/icons/svg/61/61155.svg" />
// 					</button>
// 				</div>
// 			</div>
// 			<div class="lg:w-1/12 hidden lg:block "></div>
// 			<div class="w-full lg:w-8/12 hidden lg:block mt-4 lg:mt-0 lg:text-right" id="nav-content" aria-expanded="false">
// 				<div class="bg-gray-400 px-6 lg:px-0 lg:pt-5 xl:pt-7">
// 					<div >
// 						<nav role="navigation" aria-labelledby="block-main-menu" id="block-main">
// 							<ul class="list-reset lg:flex justify-end flex-1 items-center">
// 								<li class="inline-block w-full text-xl lg:text-base font-semibold no-underline py-2 lg:px-4">
// 									<a href="/" class="text-white lg:text-black no-underline is-active">Ocean</a>
// 								</li>
// 								<li class="inline-block w-full text-xl lg:text-base font-semibold no-underline py-2 lg:px-4">
// 									<a href="/page-2" class="text-white lg:text-black no-underline">Fishing</a>
// 								</li>
// 								<li class="inline-block w-full text-xl lg:text-base font-semibold no-underline py-2 lg:px-4">
// 									<a href="/page-2" class="text-white lg:text-black no-underline is-active">Cleaning</a>
// 								</li>
// 								<li class="inline-block w-full text-xl lg:text-base font-semibold no-underline py-2 lg:px-4">
// 									<a href="/page-2" class="text-white lg:text-black no-underline is-active">Shop</a>
// 								</li>
// 								<li class="inline-block w-full text-xl lg:text-base font-semibold no-underline py-2 lg:px-4">
// 									<a href="/page-2" class="text-white lg:text-black no-underline is-active">Production</a>
// 								</li>
// 								<li class="inline-block w-full text-xl lg:text-base font-semibold no-underline py-2 lg:px-4">
// 									<a href="/page-2" class="text-white lg:text-black no-underline is-active">Parking</a>
// 								</li>
// 							</ul>
// 						</nav>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</header>
// )
// export default Header;


const Header = () => (

	<header class="xs:col-span-1 md:col-span-2 bg-gray-400 rounded-b-lg ml-3 mr-3 opacity-75">

		<nav class="grid grid-cols-3">
			<div class="my-2 pr-2 w-5/12 lg:w-3/12 overflow-hidden">
				<div class="flex  justify-center ml-4 lg:ml-0">
					<a href="/">
						<img class="md:pl-6" src="../../assets/icons/apple-icon-76x76.png" />
					</a>
				</div>
			</div>

			<div class="col-span-1 w-auto flex justify-cente flex-grow sm:flex sm:items-center sm:w-auto text-gray-400 font-extrabold">
				<div class="flex justif">
					<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
					</svg>
					<a href="/" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
						Ocean</a>
				</div>

				<div class="flex justify">
					<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
					</svg>
					<a href="/fishing" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
						fishing</a>
				</div>

				<div class="flex justify">
					<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
					</svg>
					<a href="/cleaner" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
						cleaner</a>
				</div>

				<div class="flex justify">
					<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
					</svg>
					<a href="/shop" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
						shop</a>
				</div>

				<div class="flex justify-center">
					<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<a href="/production" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
						production</a>
				</div>

				<div class="flex justify-center">
					<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<a href="/booking" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
						booking</a>
				</div>

				<div class="flex justify-center">
					<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<a href="/installing" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
						installing</a>
				</div>
				<div class="flex justify-center">
					<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<a href="/loginpage" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
						LogIn</a>
				</div>
				<div class="flex justify-center">
					<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<a href="/signin" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
						SignIn</a>
				</div>
			</div>
		</nav>
	</header >
);

export default Header;

