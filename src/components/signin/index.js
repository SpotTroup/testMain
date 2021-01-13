
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

import { Link } from 'preact-router/match';
import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import React, { useReducer } from 'react';


import axios from 'axios';

const formReducer = (state, event) => {
	return {
	  ...state,
	  [event.name]: event.value
	}
   }

const SignIn = () => {
    const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);
  
	const handleSubmit = event => {
	  event.preventDefault();
	  setSubmitting(true);
	  
  axios({
    method: 'post',
	url: 'http://116.203.95.95:3000/login',
    data: formData,
   
    })
    .then(function (response) {
        //handle success
		console.log(response);
		
localStorage.setItem('JWT_TOKEN', response.data.user);
		window.location = '/';
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
	  setTimeout(() => {
		setSubmitting(false);
	  }, 3000);
	}
  
	const handleChange = event => {
	  
		setFormData({
			name: event.target.name,
			value: event.target.value,
		  });
		 
		  console.log(formData);
	}
	
	 
	useEffect(() => {

     
	}, []);
    return (
        <div class="card border-4 opacity-80 mx-auto h-screen overflow-hidden flex items-center justify-center px-8 pt-6 pb-8 mb-4" style="background: #edf2f7;">
            <div class="card border-1 border-gray-800 opacity-95 bg-gray-400 text-gray-900 shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <p class="text-black font-extrabold text-2xl">SignIn</p>
                <form onSubmit={handleSubmit}>
                <div class="mb-4 text-black">
                   
                    
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Email
      </label>
                    <input name="email" onChange={handleChange} class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="email" placeholder="email@spottroup.de" />
                </div>
                <div class="mb-6">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Password
      </label>
                    <input name="password" onChange={handleChange} class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
                    <p class="text-red text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                    <button class="btn border-black text-white hover:text-gray-200 hover:bg-gray-700" type='submit'>
                        Sign In
      </button>
     
                    <a class="btn text-white border-black hover:text-gray-200  hover:bg-gray-700" href="#">
                        Forgot Password?
      </a>
                </div>
                </form>
            </div>
        </div>

    );
};

export default SignIn;