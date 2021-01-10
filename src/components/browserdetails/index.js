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
// Comments: JS file for the browser information
// Author: Tjark Ziehm
// Version: 0.01
// Date: 25.Dez. 2020
// CoWorkers:
//=========================================================================================

/*
* TODO: 
* Error try else handler
* general State feedback
*/

//=========================================================================================
// Structure 
//=========================================================================================

/**
* Index
* get Elementinformation from navigator for IDs
*/

//=========================================================================================
import { h } from 'preact';
import { Link } from 'preact-router/match';

import BrowserInfo from './browserInfo.js';


const BrowserDetails = () => (
    <div class="card">
        <p>test</p>
        <BrowserInfo />
    </div>

)


export default BrowserDetails;


