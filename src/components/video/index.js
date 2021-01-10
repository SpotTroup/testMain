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
// Comments: JS file for youtube player
// Author: Tjark Ziehm
// Version: 0.01
// Date: 25.Dez. 2020
// THX: https://www.npmjs.com/package/react-youtube
//=========================================================================================

/*
* <YouTube
  videoId={string}                  // defaults -> null
  id={string}                       // defaults -> null
  className={string}                // defaults -> null
  containerClassName={string}       // defaults -> ''
  opts={obj}                        // defaults -> {}
  onReady={func}                    // defaults -> noop
  onPlay={func}                     // defaults -> noop
  onPause={func}                    // defaults -> noop
  onEnd={func}                      // defaults -> noop
  onError={func}                    // defaults -> noop
  onStateChange={func}              // defaults -> noop
  onPlaybackRateChange={func}       // defaults -> noop
  onPlaybackQualityChange={func}    // defaults -> noop
/>
*/

//=========================================================================================
// Structure 
//=========================================================================================

/**
* YoutubeVideo ID:
* uvcleXH_GF8
* Ccj_H_4KGQ
*/


//=========================================================================================import React from 'react';
import React from 'react';
import YouTube from 'react-youtube';


class Youtube extends React.Component {
    componentDidMount() {
        this.setState({});
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            }
        }
        console.log('render() method')

        return (
            <div>
                <YouTube videoId="uvcleXH_GF8" opts={opts} onReady={this._onReady} />
            </div>

        );
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}


export default Youtube;