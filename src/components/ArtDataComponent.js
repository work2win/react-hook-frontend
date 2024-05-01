import { publish } from 'pubsub-js';
import React, {useEffect, useState} from 'react'
import AppService from '../services/AppService';
import pubsub from 'pubsub-js';

const ArtDataComponent = () => {

    const [artTypes, setArtTypes] = useState([])

    pubsub.subscribe('artdata', function(data) {
        console.log(data);
    });
    pubsub.publish('artdata', ['hello!']);

    useEffect(() => {      
       AppService.getArt().then((response) => {
            setArtTypes(response.data)
            pubsub.publish('artdata', response.data);
           console.log(response.data);
       })
    }, []); 
    
   
    return (
        <div className = "container">
           
        <p>list of art types</p>
        <table><thead></thead><tbody>
        {
            artTypes.map(
                artType =>
                    <tr key = {artType.id[0]}>
                        <td>{artType.artType}</td>
                    </tr>                    
                )    
        }
        </tbody>

        </table>
        </div>
        
    )
}

export default ArtDataComponent