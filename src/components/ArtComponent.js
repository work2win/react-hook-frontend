import './artstyle.css';

import React, { useEffect, useState } from 'react'
import AppService from '../services/AppService'




const ArtComponent = () => {

    const [artTypes, setArtTypes] = useState([])

    useEffect(() => {      
       AppService.getArt().then((response) => {
            setArtTypes(response.data)
           console.log(response.data);
       })
    }, []);              
    return (
        <div className = "container">            
            <div class="row no-gutters bg-light position-relative">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <img src="pic.png" class="w-100" alt="..."></img>
                    
                </div>
                <div class="col-md-6 position-static p-4 pl-md-0">
                    <h5 class="mt-0">ART TYPES</h5>
                    <p>
                    <table className = "table table-center table-light">
                        <thead>
                                      
                        </thead>
                        <tbody>
                        {
                    artTypes.map(
                        artType =>
                        <tr key = {artType.id}>
                            <td><a href="https://www.google.com/" class="stretched-link">{artType.artType}</a></td>
                        </tr>                    
                    )    
                }
                        </tbody></table>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    <a href="https://www.mozilla.org/en-US/" class="stretched-link">Go somewhere</a>
                </div>
            </div>
            <h2 className = "text-center">ART TYPES</h2>
            <table className = "table table-center table-light">
            <thead>
                <th scope="col"> ART ID </th>
                <th scope="col"> ArtType </th>
                <th scope="col"> ArtName </th>
                <th scope="col"> price </th>                
            </thead>
            <tbody>
                {
                    artTypes.map(
                        artType =>
                        <tr key = {artType.id}>
                            <td>{artType.id}</td>
                            <td>{artType.artType}</td>
                            <td>{artType.artName}</td>
                            <td>{artType.price}</td>                                                     
                        </tr>
                    
                    )    
                }
            </tbody></table>
             
        </div>
    )
}

export default ArtComponent;
