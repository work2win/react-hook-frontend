import React, { useEffect, useState } from 'react'
import AppService from '../services/AppService'

const RoomAcComponents = ()=> {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        AppService.getAcRoom().then((response) => {
            setRooms(response.data);
            //console.log("room value"+response.data);
        })
    }, [])
    return(
        <div className = "container">
            	<div className="wrapper style2">
				<section className="container">
					<header className="major">
						<h2>WHAT WE OFFER FOR ROOMS</h2>
						<span className="byline"><i>Rooms below </i></span>
					</header>
					<div className="row no-collapse-1">
						<section className="4u">
							
							<p> Right now the available rooms are {rooms} </p>
						</section>
						<section className="4u">
							
							<p></p>
						</section>
						<section className="4u">
							
							<p></p>
						</section>
	
					</div>
				</section>
			</div>
           
        </div>
    )

}

export default RoomAcComponents