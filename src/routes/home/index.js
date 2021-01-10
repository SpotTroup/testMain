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
import { h } from 'preact';
import style from './style.css';

import MapNavigationCard from '../../components/mapnavigationcard/index.js';
import Header from '../../components/header/index.js';
import Footer from '../../components/footer/index.js';
import HistoryLoader from '../../components/historyloader/index.js';
import BrowserDetails from '../../components/browserdetails/index.js';


const Home = () => (
	<div class="bg-fixed" style="background-image: url('../../assets/background/bg-ocean.png')" >
		
		<MapNavigationCard />
		<HistoryLoader />
		
		
	</div>

);

export default Home;
