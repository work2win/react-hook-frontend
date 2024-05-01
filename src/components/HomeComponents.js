import React, { useEffect, useState } from 'react'
import AppService from '../services/AppService'


const HomeComponents = () => {

    const [hotels, setHotels, customers, setCustomers] = useState([])

    useEffect(() => {
      
       AppService.getHotel().then((response) => {
            setHotels(response.data)
           console.log(response.data);
       })
    }, [])
    useEffect(() => {
      
        AppService.getCustomer().then((response) => {
             setCustomers(response.data)
            console.log(response.data);
        })
     }, []);          
    return (
        <div className = "container">
            
            <table className = "table table-center table-light">
            <thead>
                <th scope="col"> HOTEL ID </th>
                <th scope="col"> HOTEL NAME </th>
                <th scope="col"> EMAIL </th>
                <th scope="col"> DESCRIPTION </th>
                <th scope="col"> ROOM </th>
                <th scope="col"> PRICE </th>
            </thead>
            <tbody>
                {
                    hotels.map(
                        hotel =>
                        <tr key = {hotel.hid}>
                            <td>{hotel.hid}</td>
                            <td>{hotel.name}</td>
                            <td>{hotel.email}</td>
                            <td>{hotel.buissitem}</td>
                            <td>{hotel.buissdesc}</td>
                            <td>{hotel.cost}</td>                            
                        </tr>
                    
                    )    
                }
            </tbody></table>
             
        </div>
    )
}

export default HomeComponents;
