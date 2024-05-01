import axios from 'axios'
import React from 'react'

const HOTEL_BASE_REST_URL = "http://localhost:9091/hotel";
const CUSTOMER_BASE_REST_URL = "http://localhost:9091/customers";
const ART_BASE_REST_URL = "http://localhost:9091/artTypes";
const ROOM_BASE_REST_URL = "http://localhost:9091/rooms";
const ACROOM_BASE_REST_URL = "http://localhost:9091/acrooms";
const NONACROOM_BASE_REST_URL = "http://localhost:9091/nonacrooms";


class AppService extends React.Component{

    state = {
        roomdata: []
    }

    getHotel(){
        axios.get("http://localhost:9091/hotel").then(resp => {
            console.log("hotel"+resp.data);
        })
        return axios.get(HOTEL_BASE_REST_URL);
    }

    getCustomer(){
        return axios.get(CUSTOMER_BASE_REST_URL);
    }

    getArt(){
        return axios.get(ART_BASE_REST_URL);
    }

    getRoom(){
        return axios.get(ROOM_BASE_REST_URL);
    }

    getAcRoom(){
        return axios.get(ACROOM_BASE_REST_URL);
    }

    getNonAcRoom(){
        return axios.get(NONACROOM_BASE_REST_URL);
    }

    /*getRoom(){
        
        
        axios.get("http://localhost:9091/totalrooms").then(resp => {
             const roomdata = resp.data;
                this.setState = ({roomdata});
            console.log("rooms..........."+roomdata);
        })
        return(
            <ul>
                {this.state}
            </ul>
        ) ;
    } */
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AppService();
