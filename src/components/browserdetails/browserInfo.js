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
// Comments: JS file for the  static BasicCard as template
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

//=====================================================================================
import { comment } from 'postcss';
import { h, Component } from 'preact';


// const CockieEnabled = ({ }) => <p id="cockieEnabled"></p>
// const ApplicationName = ({ }) => <p id="applicationName"></p>
// const ApplicationCodeName = ({ }) => <p id="applicationCodeName"></p>
// const BrowserEngine = ({ }) => <p id="browserEngine"></p>
// const Version = ({ }) => <p id="version"></p>
// const Agent = ({ }) => <p id="agent">Cockies</p>
// const BrowserPlattform = ({ }) => <p id="browserPlattform"></p>
// const BrowserLanguage = ({ }) => <p id="browserLanguage"></p>
// const OnlineStatus = ({ }) => <p id="onlineStatus"></p>
// const JavaEnabled = ({ }) => <p id="javaEnabled">javaEnabled</p>
//     </script >

const BrowserInfo = () => (





<div>




    <div class="Card">
        <CockieEnabled />
        <ApplicationName />
        <ApplicationCodeName />
        <BrowserEngine />
        <Version />
        <Agent />
        <BrowserPlattform />
        <BrowserLanguage />
        <OnlineStatus />
        <JavaEnabled />
    </div>
    <script>
        document.getElementById("demo").innerHTML =
        "cookiesEnabled is " + navigator.cookieEnabled;
</script>
</div>

    

)


export default BrowserInfo;