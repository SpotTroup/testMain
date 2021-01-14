
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


import {useEffect, useState} from "preact/hooks";
import React, { useReducer } from 'react';

import axios from 'axios';


const formReducer = (state, event) => {
	return {
	  ...state,
	  [event.name]: event.value
	}
   }

const BookingForm = () => {
    const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);
  
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
			value: event.value,
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
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	const [blog, setoptions] = useState([]);
	 
	useEffect(() => {

		axios.get("http://116.203.95.95:1234/api/spottroup/findbyparentdeviceid/"+user)
      .then(res => {
		const
		blog = res.data;
      // options=res.data;
		console.log("persons:...."+user );
		console.log("blog...." );
		console.log(blog );
	//	console.log(options );
		for (let index = 0; index < blog.length; index++) {
			blog[index].value = blog[index].id;
			
			blog[index].label = 'Blog'+index;
			//options[index].classname = blog[index].classname;
			
		  }
		  console.log(blog );
		  setoptions(blog);
        // for (let index = 0; index < this.state.persons.length; index++) {
        //   this.state.markers[index].name = this.state.persons[index].areaname;
        //   this.state.markers[index].position = {lat:parseFloat(this.state.persons[index].latitude),lng: parseFloat(this.state.persons[index].longitude)}
          
        // }
      })
	}, []);

    return (
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

    );
};

export default BookingForm;









// const LogIn = () => {

//         <div class="card border-4 opacity-80 mx-auto h-screen  flex items-center justify-center px-8 pt-6 pb-8 mb-4" style="background: #edf2f7;">
//             <div class="card border-1 border-gray-800 opacity-95 bg-gray-400 text-gray-900 shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

//                 <p class="text-black font-extrabold text-2xl">LogIn</p>

//                 <div class="mb-4 text-black">
//                     <label class="block text-grey-darker text-sm font-bold mb-2" for="firstname">First Name</label>
//                     <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="firstname" type="text" placeholder="Name" />
//                 </div>

//                 <div class="mb-4 text-black">
//                     <label class="block text-grey-darker text-sm font-bold mb-2" for="surname">Last Name      </label>
//                     <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="surname" type="text" placeholder="Surname" />
//                 </div>

//                 <div class="mb-4 text-black">
//                     <label class="block text-grey-darker text-sm font-bold mb-2" for="city">City</label>
//                     <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="city" type="text" placeholder="city" />
//                 </div>

//                 <div class="mb-4 text-black">
//                     <label class="block text-grey-darker text-sm font-bold mb-2" for="street">Street</label>
//                     <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="street" type="text" placeholder="street" />
//                 </div>

//                 <div class="mb-4 text-black">
//                     <label class="block text-grey-darker text-sm font-bold mb-2" for="housenumber">Hausnummer</label>
//                     <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="housenumber" type="number" placeholder="21" />
//                 </div>

//                 <div class="mb-4 text-black">
//                     <label class="block text-grey-darker text-sm font-bold mb-2" for="zipcode">Postleitzahl</label>
//                     <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="zipcode" type="number" placeholder="24118" />
//                 </div>

//                 <div class="mb-4 text-black">
//                     <label class="block text-grey-darker text-sm font-bold mb-2" for="phonenumbe">Telefonnummer</label>
//                     <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="phonenumber" type="number" placeholder="012332199312" />
//                 </div>

//                 <div class="mb-4 text-black">
//                     <label class="block text-grey-darker text-sm font-bold mb-2" for="paypal">PayPal-Account</label>
//                     <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="paypal" type="email" placeholder="me@paypal.de" />
//                 </div>

//                 <div class="mb-4 text-black">
//                     <label class="block text-grey-darker text-sm font-bold mb-2" for="username">Email</label>
//                     <input class=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="email" placeholder="myemail@spottroup.de" />
//                 </div>

//                 <div class="mb-6">
//                     <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
//                     <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
//                     <p class="text-red text-xs italic">Please choose a password.</p>
//                 </div>

//                 <div class="mb-6">
//                     <p class="text-black font-bold text-md"> Please repeat your password</p>
//                     <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
//                     <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
//                 </div>

//                 <div class="flex items-center justify-between">
//                     <button class="btn border-black text-white hover:text-gray-200 hover:bg-gray-700" type="button">SignIn</button>
//                     <a class="btn text-white border-black hover:text-gray-200  hover:bg-gray-700" href="#">LogIn</a>
//                 </div>
//             </div>
//         </div>


// };

// export default LogIn;