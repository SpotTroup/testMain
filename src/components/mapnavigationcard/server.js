import React from 'react';
import { createRef, Component } from 'preact';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import GlobalState from './GlobalState';
import axios from 'axios';
import CurrentLocation from './Map';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://116.203.95.95:4001";

// const mapStyles = {
//     width: '50%',
//     height: '50%'
// };

export class Server extends Component {
    _isMounted = false;
    state = {
        parentdevice: [],
        blogs: [],
        markers: [],
        response: ''
    }

    zoomvaldetect() {
        console.log("Zoom: " + GlobalState.zoomval);
        console.log(this.state.blogs);


        try {
            if (GlobalState.zoomval > 18) {
                console.log(this.state.blogs);
                for (let index = 0; index < this.state.blogs.length; index++) {
                    this.state.markers[index].id = this.state.blogs[index].id;
                    this.state.markers[index].name = 'Blog' + index;
                    this.state.markers[index].type = 'blog';
                    this.state.markers[index].position = { lat: parseFloat(this.state.blogs[index].latitude), lng: parseFloat(this.state.blogs[index].longitude) }
                    this.state.markers[index].avaiable = this.state.blogs[index].avaiable;
                }

            } else {
                console.log(this.state.parentdevice.length);
                for (let index = 0; index < this.state.parentdevice.length; index++) {
                    this.state.markers[index].id = this.state.parentdevice[index].id;
                    this.state.markers[index].name = this.state.parentdevice[index].areaname;
                    this.state.markers[index].type = 'parent';
                    this.state.markers[index].position = { lat: parseFloat(this.state.parentdevice[index].latitude), lng: parseFloat(this.state.parentdevice[index].longitude) }
                    this.state.markers[index].avaiable = parseFloat(this.state.parentdevice[index].blognumber) - parseFloat(this.state.parentdevice[index].totalavailable);
                }

            }
        } catch (error) {
            icon
            console.error();
        }
    };

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        const socket = socketIOClient(ENDPOINT);

        socket.on("FromAPI", data => {
            this.state.response = data;
            let blogs = data;
            this.setState(blogs);
            console.log('socket' + this.state.response);
        });

        this._isMounted = true;
        console.log("Zoom: " + GlobalState.zoomval);

        axios.get("http://116.203.95.95:1234/api/spottroup/parentdevice/")
            .then(res => {
                const parentdevice = res.data;
                this.setState({ parentdevice });
                console.log("parentdevice:....");
                console.log(parentdevice);

            })

        axios.get("http://116.203.95.95:1234/api/spottroup/blog/")
            .then(res => {
                const blogs = res.data;
                this.setState({ blogs });
                console.log("blogs:....");
                console.log(blogs);

            })
    }

    i = 0;

    constructor(props) {
        super(props);


        this.handleClick = this.handleClick.bind(this);
    }
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        selectedplaceid: {},
        selectedplacename: {},
        value: 0
    };

    nameid = 0;

    onMarkerClick = (props, marker, e) => {
        this.nameid = props.name.split("/");
        console.log('props:..' + this.nameid);

        this.setState({
            selectedPlace: props,
            selectedplacename: this.nameid[0],
            selectedplaceid: this.nameid[1],
            activeMarker: marker,
            showingInfoWindow: true

        });

    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    handleClick(event) {
        this.setState({ value: undefined });
    }

    render() {

        try {
            if (GlobalState.zoomval > 18) {
                this.state.markers = [];
                console.log(this.state.blogs.length);
                for (let index = 0; index < this.state.blogs.length; index++) {
                    this.state.markers.push({
                        name: "Prking Lot1",
                        position: { lat: 54.33666843424961, lng: 10.122042618360124 }
                    })
                    console.log(index);
                    this.state.markers[index].id = this.state.blogs[index].id;
                    this.state.markers[index].name = 'Blog' + index;
                    this.state.markers[index].type = 'blog';
                    this.state.markers[index].position = { lat: parseFloat(this.state.blogs[index].latitude), lng: parseFloat(this.state.blogs[index].longitude) }
                    this.state.markers[index].available = this.state.blogs[index].available;

                }
            } else {
                this.state.markers = [];
                console.log('in render' + this.state.parentdevice.length);
                for (let index = 0; index < this.state.parentdevice.length; index++) {
                    this.state.markers.push({
                        name: "Prking Lot1",
                        position: { lat: 54.33666843424961, lng: 10.122042618360124 }
                    })
                    this.state.markers[index].id = this.state.parentdevice[index].id;
                    this.state.markers[index].name = this.state.parentdevice[index].areaname;
                    this.state.markers[index].type = 'parent';
                    this.state.markers[index].position = { lat: parseFloat(this.state.parentdevice[index].latitude), lng: parseFloat(this.state.parentdevice[index].longitude) }
                    this.state.markers[index].available = parseFloat(this.state.parentdevice[index].blognumber) - parseFloat(this.state.parentdevice[index].totalavailable);
                }
            }

            console.log(this.state.markers);
            console.log(this.state.parentdevice);

        } catch (error) {
            console.log(error)
            this.state.markers = [
                {
                    name: "Prking Lot1",
                    position: { lat: 54.33666843424961, lng: 10.122042618360124 }
                },
                {
                    name: "Prking Lot2",
                    position: { lat: 54.3236877956612, lng: 10.120146467496845 }
                },
                {
                    name: "Prking Lot3",
                    position: { lat: 54.321251147910694, lng: 10.12785028619348 }
                },
                {
                    name: "Prking Lot1",
                    position: { lat: 54.33666843424961, lng: 10.122042618360124 }
                },
                {
                    name: "Prking Lot2",
                    position: { lat: 54.3236877956612, lng: 10.120146467496845 }
                },
                {
                    name: "Prking Lot3",
                    position: { lat: 54.321251147910694, lng: 10.12785028619348 }
                },
                {
                    name: "Prking Lot1",
                    position: { lat: 54.33666843424961, lng: 10.122042618360124 }
                },
                {
                    name: "Prking Lot2",
                    position: { lat: 54.3236877956612, lng: 10.120146467496845 }
                },
                {
                    name: "Prking Lot3",
                    position: { lat: 54.321251147910694, lng: 10.12785028619348 }
                },
                {
                    name: "Prking Lot1",
                    position: { lat: 54.33666843424961, lng: 10.122042618360124 }
                },
                {
                    name: "Prking Lot2",
                    position: { lat: 54.3236877956612, lng: 10.120146467496845 }
                },
                {
                    name: "Prking Lot3",
                    position: { lat: 54.321251147910694, lng: 10.12785028619348 }
                }
            ];
        }
        console.log("Zoom: " + GlobalState.zoomval);
        const { markers, parentdevice, blogs } = this.state;

        return (

            <CurrentLocation
                centerAroundCurrentLocation
                zoomvaldetect={this.zoomvaldetect}
                parentdevice={parentdevice}
                blogs={blogs}
                markers={markers}

                google={this.props.google}>
                {this.state.markers.map((marker, index) => (
                    <Marker
                        key={index}
                        onClick={this.onMarkerClick}
                        name={marker.name + '/' + marker.id}
                        position={marker.position}
                        icon={marker.type == 'parent' ? { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" } : marker.available ? { url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" } : { url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }}
                    />
                ))}

                <Marker onClick={this.onMarkerClick} name={'Current Location'} />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}>
                    <div>
                        <span> <h1>Rating:</h1></span>
                        <div>
                            <svg class="w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <h4>{this.state.selectedPlace.name}</h4>


                        <a href={'/profile/' + this.state.selectedplaceid}>Book this parking space</a>
                    </div>
                </InfoWindow>

            </CurrentLocation>


        );
    }
}

const LoadingContainer = (props) => (
    <div>Loading SpotTroup Map...</div>
  )

export default GoogleApiWrapper(
    (props) => ({
        apiKey: 'AIzaSyBWi7va9_VnTpXvszjh5rFLuOPMs9XQcww',
        language: props.language,
        LoadingContainer: LoadingContainer
      }
    
))(Server)
