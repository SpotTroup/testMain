
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


import React from 'react';
import { createRef, Component } from 'preact';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import axios from 'axios';

import { Link } from 'preact-router/match';


export class Installing extends Component {
    _isMounted = false;
    state = {
      lat: 0.0,
      lng: 0.0
  
    };
  
     formData = new FormData();
  
    componentWillUnmount() {
      this._isMounted = false;
    }
    onMapClicked = (props) => {
      console.log('onmap clicked');
      if (this.state.showingInfoWindow) {
        this.setState({
  
          activeMarker: null
        })
      }
    };
    componentDidMount() {
       // returns the URL query String
      
      console.log(this.props.matches);
      
  
  
    }
    i = 0;
    constructor(props) {
      super(props);
  
  
      this.handleClick = this.handleClick.bind(this);
    }
    state = {
  
      activeMarker: {},
  
      value: 0
    };
    nameid = 0;
    onMarkerClick = (props, marker, e) => {
  
  
      this.setState({
  
  
  
      });
  
    }
    onMarkerDragend = (props, marker, e) => {
      let lat = marker.getPosition().lat();
      let lng = marker.getPosition().lng();
      this.setState({ lat });
      this.setState({ lng });
      console.log('drag lat lang' + lat + ' ' + lng);
  
      console.log('on dragend');
    }
  
    handleSubmit = event => {
      event.preventDefault();
      
  
     
      axios.post('http://116.203.95.95:1234/api/spottroup/blog/', {
        latitude: this.state.lat.toString(),
  longitude: this.state.lng.toString(),
  parentdeviceid: "5fd9055129c999e8b94e902a",
  available: true,
  type : "A",
  classname : "A"
      })
        .then(function (response) {
          //handle success
          console.log(response);
  
         
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      setTimeout(() => {
       
      }, 3000);
    }
    handleChange = event => {
        
        try {
          
        this.formData.append(event.target.name, event.target.value);
       
        console.log(this.formData);
        console.log(event.target.name+'  '+event.target.value);
        } catch (error) {
      
        this.formData.append(event.name, event.value);
        console.log(event.name+'  '+event.value);
           console.log(this.formData);
            console.log(this.formData);
        }
      }
    
    handleClick(event) {
      this.setState({ value: undefined });
    }
    render() {
  
  
  
    return (
        <div class="container border-4 opacity-80 mx-auto h-screen overflow-hidden px-8 pt-6 pb-8 mb-4" style="background: #edf2f7;">
           <div class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
    <button class="btn border-black text-white hover:text-gray-200 hover:bg-gray-700"><Link style={{ color: 'black' }} href="/qrscan"><h1>Scan Blog</h1></Link></button>
      
      <Map
                style={{ width: '300px', height: '450px', marginTop: 20 }}
                onClick={this.onMapClicked}
                google={this.props.google}
              >

                <Marker draggable={true}
                  onDragend={this.onMarkerDragend}
                  onClick={this.onMarkerClick} name={'Current Location'} />

              </Map>
      
              <h3>latitude: {this.state.lat}</h3>
              <h3>longitude: {this.state.lng}</h3>
              <input type="datetime-local" id="birthdaytime" name="parkingtime" onChange={this.handleChange}></input>
    </div>
    </div>
    </div>
          
              
            <div class="card border-1 border-gray-800 opacity-95 bg-gray-400 text-gray-900 shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <p>How To Video</p>
            </div>

            <div class="card border-1 border-gray-800 opacity-95 bg-gray-400 text-gray-900 shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <p>Chat</p>
            </div>
            <div class="">
                <div class="card btn mx-auto w-24 flex justify-items-center"><a href="/activating">Activate</a></div>
            </div>
        </div>

    );
}
}

export default GoogleApiWrapper({
apiKey: 'AIzaSyBWi7va9_VnTpXvszjh5rFLuOPMs9XQcww'
})(Installing);








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