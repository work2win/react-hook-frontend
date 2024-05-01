import React, { useEffect, useState } from 'react'
import AppService from '../services/AppService'


const RoomComponent = ()=> {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
		
        AppService.getRoom().then((response) => {
            setRooms(response.data)
			//console.log(response.data);
       })
    }) 
    
    
    
	return (
        
        <div className = "container">            
			<div className="wrapper style2">
			<section className="container">
				<header className="major">
						
						<span className="byline"><i>below rooms are open</i></span>

                        
				</header>
                
                
			<div className="row no-collapse-1">
			<section className="4u">

            <table className = "table table-center table-light">
            <thead>
                
                <th scope="col"> ROOM NUMBER </th>
                <th scope="col"> ROOM TYPEtt </th>
                <th scope="col"> PRICE </th>                
            </thead>
            <tbody>
                {
                    rooms.map(
                        room =>
                        <tr key = {room.id}>
                            
                            <td>{room.roomNum}</td>
                            <td>{room.roomType}</td>
                            <td>{room.roomPrice}</td>                                                       
                        </tr>
                    
                    )    
                }
            </tbody></table>
             </section></div>
        </section></div>
		</div>
        
    )
        
}

export default RoomComponent