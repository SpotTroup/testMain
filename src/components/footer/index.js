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

import { h } from 'preact';
import { Link } from 'preact-router/match';
import SizeControll from '../../components/sizecontroll/index.js';

import './style.css';


const Footer = () => (
  <div class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
 



<footer class="bg-gray-800 sm:mt-10 pt-10">
  <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
      
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          
          <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              Getting Started
          </div>

          
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Installation
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Release Notes
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Upgrade Guide
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Using with Preprocessors
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Optimizing for Production
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Browser Support
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              IntelliSense
          </a>
      </div>

      
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          
          <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              Core Concepts
          </div>

         
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Utility-First
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Responsive Design
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Hover, Focus, & Other States
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Dark Mode
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Adding Base Styles
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Extracting Components
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Adding New Utilities
          </a>
      </div>

      
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        
          <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              Customization
          </div>

          
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Configuration
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Theme Configuration
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Breakpoints
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Customizing Colors
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Customizing Spacing
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Configuring Variants
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Plugins
          </a>
      </div>

      
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
         
          <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              Community
          </div>

         
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              GitHub
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Discord
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              Twitter
          </a>
          <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              YouTube
          </a>
      </div>
  </div>

  
  <div class="pt-2">
      <div class="flex pb-5 px-3 m-auto pt-5 
          border-t border-gray-500 text-gray-400 text-sm 
          flex-col md:flex-row max-w-6xl">
          <div class="mt-2">
              © Copyright 1998-year. All Rights Reserved.
          </div>

          
          <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
              <a href="#" class="w-6 mx-1">
                  <i class="uil uil-facebook-f"></i>
              </a>
              <a href="#" class="w-6 mx-1">
                  <i class="uil uil-twitter-alt"></i>
              </a>
              <a href="#" class="w-6 mx-1">
                  <i class="uil uil-youtube"></i>
              </a>
              <a href="#" class="w-6 mx-1">
                  <i class="uil uil-linkedin"></i>
              </a>
              <a href="#" class="w-6 mx-1">
                  <i class="uil uil-instagram"></i>
              </a>
          </div>
      </div>
  </div>
</footer>
</div>
);

export default Footer;
