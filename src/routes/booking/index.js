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
// Comments: JS file for home as landing page to enter the ocean side
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
* @class Sw
* @constructor 
* @extends 
* @functions
* @useEffect to prevend window undefind errors
* @return
*/

//=========================================================================================
import {useEffect, useState} from "preact/hooks";
import React, { useReducer } from 'react';

import axios from 'axios';

import MapNavigationCard from '../../components/mapnavigationcard/index.js';
import Header from '../../components/header/index.js';
import Footer from '../../components/footer/index.js';
import HistoryLoader from '../../components/historyloader/index.js';
import BrowserDetails from '../../components/browserdetails/index.js';
import BookingForm from '../../components/bookingform/index.js';

const formReducer = (state, event) => {
	return {
	  ...state,
	  [event.name]: event.value
	}
   }
const Booking = ({ user }) => {
	
	const [formData, setFormData] = useReducer(formReducer, {});
	const [isLoggedIn, setLoggedin] = useState(false);
  
	const handleSubmit = event => {
	  event.preventDefault();
	  setSubmitting(true);
	  
  axios({
    method: 'post',
    url: 'http://116.203.95.95:1234/api/spottroup/booking/',
    data: formData,
   
    })
    .then(function (response) {
        //handle success
		console.log(response);
		
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
	  
	  try {
		setFormData({
			name: event.target.name,
			value: event.target.value,
		  });
		  console.log(formData);
	  } catch (error) {
		setFormData({
			name: 'blogid',
			value: user,
		  });
		  setFormData(
		  {
			name: 'classname',
			value: event.classname,
		  });
		  setFormData({
			name: 'paymentstatus',
			value: 'ok',
		  });
		  console.log(formData);
		  setFormData(
		  {
			name: 'userid',
			value: localStorage.getItem('JWT_TOKEN'),
		  });
		  console.log(formData);
		  setFormData(
		  {
			name: 'parentdeviceid',
			value: user,
		  });
	     console.log(formData);
		  console.log(formData);
	  }
	}
	
	 
	useEffect(() => {

		
	}, []);

	
	return (
	<div class="bg-fixed" style="background-image: url('../../assets/background/bg-ocean.png')" >
		

		<div class="card border-4 opacity-80 mx-auto h-screen overflow-hidden flex items-center justify-center px-8 pt-6 pb-8 mb-4" style="background: #edf2f7;">
            <div class="card border-1 border-gray-800 opacity-95 bg-gray-400 text-gray-900 shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                <p class="text-black font-extrabold text-2xl">LogIn</p>
                <form onSubmit={handleSubmit}>
                <div class="mb-4 text-black">
                   
                    
                <label for="meeting-time">Choose a date and time for your booking:</label>

<input type="datetime-local" id="birthdaytime" name="parkingtime" onChange={handleChange}></input>
                </div>
                <div class="mb-6">
                <label for="quantity">Choose booked time :</label>
  <input type="number" id="quantity" name="parkingduration" min="15" max="120" onChange={handleChange}></input>
                  
                </div>
                <div class="flex items-center justify-between">
                    <button class="btn border-black text-white hover:text-gray-200 hover:bg-gray-700" type='submit'>
                      Book
      </button>
     
                  
                </div>
                </form>
            </div>
        </div>
		

		
	</div>

)

	};

export default Booking;
