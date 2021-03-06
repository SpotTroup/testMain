//=========================================================================================
//                        ____              _  _____
//                       / ___| _ __   ___ | ||_   _| __ ___  _   _ _ __
//                       \___ \| '_ \ / _ \| __|| || '__/ _ \| | | | '_ \
//                        ___) | |_) | (_) | |_ | || | | (_) | |_| | |_) |
//                       |____/| .__/ \___/ \__||_||_|  \___/ \__,_| .__/
//                             |_|                                 |_|
// create with figlet 
//
// Name: index.js for the footer of the app
// Comments: JS file for AppFind
// Author: Tjark Ziehm
// Version: 0.01
// Date: 25.Dez. 2020
// CoWorkers:
//=========================================================================================

/*
* TODO: 
* 1. Add Logo @ the top (single Hexagon)
* 2. Set card with actual position
* 3. Set search Card for Zip-code-serach field, Start-Button, Street-searchfield. start and end time props ( with clock to set) , and expert modus with popup
* 4. Set search function for parling spaces.
* 5. Set View of spaces.
* 6. Set Notification for  parkingspaces with information about rating , comment, price ( day and hour ) and book button
*/

//=========================================================================================
// Structure 
//=========================================================================================
0
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
import { useEffect, useState } from "preact/hooks";
import React, { useReducer } from 'react';

import axios from 'axios';
import { h } from 'preact';
import { Link } from 'preact-router/match';
import SizeControll from '../../components/sizecontroll/index.js';
import './nav.js';
import './style.css';



const Header = () => {
	const [isLoggedIn, setLoggedin] = useState(false);
	let button;
	if (isLoggedIn) {
		button = <LogoutButton onClick={handleLogoutClick} />;
	} else {
		button = <LoginButton />;
	}
	const Click = () => {
		document.getElementById("nav-content").classList.toggle("hidden");
	};
	useEffect(() => {

		let comments = localStorage.getItem('JWT_TOKEN');
		console.log(comments);
		if (comments) {
			setLoggedin(true);
		} else {
			setLoggedin(false);
		}
	}, []);
	const handleLogoutClick = () => {
		localStorage.removeItem("JWT_TOKEN")
		this.setState({ isLoggedIn: false });
	}

	function LoginButton(props) {
		return (<div>
			<li class="mr-3">
				<a
					class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
					href="/loginpage"
				>LogIn</a>
			</li>
			<li class="mr-3">
				<a
					class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
					href="/signin"
				>SignIn</a>
			</li>
		</div>
		);
	}

	function LogoutButton(props) {
		return (
			<li class="mr-3">
				<button class="btn border-black text-white hover:text-gray-200 hover:bg-gray-700" type='button' >
					Logout
      </button>
			</li>
		);
	}
	return (

		<div class="bg-gray-400  " style={{ height: '150px' }}>
			<nav
				style={{ height: '150px' }}
				class="flex items-center justify-between flex-wrap rounded-2xl bg-gray-600 p-6 fixed w-full z-10 pin-t"
			>
				<div class="my-2 pr-2 w-5/12 lg:w-3/12 overflow-hidden" style={{ height: '50px' }}>
					<div class="flex  justify-center ml-4 lg:ml-0">
						<a href="/">
							<img class="md:pl-6" src="../../assets/icons/apple-icon-76x76.png" />
						</a>
					</div>
				</div>

				<div style={{ height: '50px' }} class="flex items-center flex-no-shrink text-white mr-6">
					<a
						class="text-white no-underline hover:font-extrabold hover:no-underline"
						href="#"
					>

						<span class="text-2xl pl-2 "
						><i class="em em-grinning"></i> SpotTroup</span>
					</a>
				</div>

				<div style={{ height: '50px' }} class="block lg:hidden">
					<button
						id="nav-toggle"
						class="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-black hover:border-black" onClick={Click}
					>
						<svg
							class="fill-current h-3 w-3"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>

				<div style={{ height: '50px' }}
					class="w-full flex-grow lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
					id="nav-content"
				>
					<ul class="list-reset lg:flex justify-end flex-1 items-center">
						<li class="mr-3">
							<a
								class="inline-block py-2 px-4 text-white no-underline"
								href="/"
							>Ocean</a
							>
						</li>
						<li class="mr-3">
							<a
								class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
								href="/fishing"
							>Fishing</a>
						</li>
						<li class="mr-3">
							<a
								class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
								href="/cleaner"
							>Cleaning</a>
						</li>
						<li class="mr-3">
							<a
								class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
								href="/shop"
							>Shop</a>
						</li>
						<li class="mr-3">
							<a
								class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
								href="/production"
							>Produktion</a>
						</li>
						<li class="mr-3">
							<a
								class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
								href="#"
							>Parking</a>
						</li>
						<li class="mr-3">
							<a
								class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
								href="/installing"
							>Installing</a>
						</li>
						{button}

					</ul>
				</div>
			</nav>

			<div class="container shadow-lg mx-auto bg-black "></div>
		</div>
	)
};

export default Header;

