
//=========================================================================================
//                        ____              _  _____
//                       / ___| _ __   ___ | ||_   _| __ ___  _   _ _ __
//                       \___ \| '_ \ / _ \| __|| || '__/ _ \| | | | '_ \
//                        ___) | |_) | (_) | |_ | || | | (_) | |_| | |_) |
//                       |____/| .__/ \___/ \__||_||_|  \___/ \__,_| .__/
//                             |_|                                 |_|
// create with figlet 
//
// Name: index.js for loader
// Comments: JS file for Loading Situation
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
import { h } from 'preact';
import { Link } from 'preact-router/match';

const LogIn = () => {
    return (
        <div class="card border-4 opacity-80 mx-auto h-screen  flex items-center justify-center px-8 pt-6 pb-8 mb-4" style="background: #edf2f7;">
            <div class="card border-1 border-gray-800 opacity-95 bg-gray-400 text-gray-900 shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                <p class="text-black font-extrabold text-2xl">LogIn</p>

                <div class="mb-4 text-black">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="firstname">First Name</label>
                    <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="firstname" type="text" placeholder="Name" />
                </div>

                <div class="mb-4 text-black">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="surname">Last Name      </label>
                    <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="surname" type="text" placeholder="Surname" />
                </div>

                <div class="mb-4 text-black">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="city">City</label>
                    <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="city" type="text" placeholder="city" />
                </div>

                <div class="mb-4 text-black">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="street">Street</label>
                    <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="street" type="text" placeholder="street" />
                </div>

                <div class="mb-4 text-black">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="housenumber">Hausnummer</label>
                    <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="housenumber" type="number" placeholder="21" />
                </div>

                <div class="mb-4 text-black">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="zipcode">Postleitzahl</label>
                    <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="zipcode" type="number" placeholder="24118" />
                </div>

                <div class="mb-4 text-black">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="phonenumbe">Telefonnummer</label>
                    <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="phonenumber" type="number" placeholder="012332199312" />
                </div>

                <div class="mb-4 text-black">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="paypal">PayPal-Account</label>
                    <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="paypal" type="email" placeholder="me@paypal.de" />
                </div>

                <div class="mb-4 text-black">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">Email</label>
                    <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="email" placeholder="myemail@spottroup.de" />
                </div>

                <div class="mb-6">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                    <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
                    <p class="text-red text-xs italic">Please choose a password.</p>
                </div>

                <div class="mb-6">
                    <p class="text-black font-bold text-md"> Please repeat your password</p>
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                    <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
                </div>

                <div class="flex items-center justify-between">
                    <button class="btn border-black text-white hover:text-gray-200 hover:bg-gray-700" type="button">SignIn</button>
                    <a class="btn text-white border-black hover:text-gray-200  hover:bg-gray-700" href="#">LogIn</a>
                </div>
            </div>
        </div>

    );
};

export default LogIn;