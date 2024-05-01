import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
const HotelRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
   
    
    useEffect(() => {
       
        fetch('/rooms').then(response => response.json()).then(data => { 
            setRooms(data);
           setLoading(false);
            
         })
    }, []);

    const remove = async (id) => { 
        await fetch(`/room/${id}`, { 
            method: 'DELETE',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => { 
            let updatedRooms = [...rooms].filter(i => i.id !== id);
            setRooms(updatedRooms);        
        });
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const hotelroom = rooms.map(room => {
        return <tr key={room.id}>
            <td>{room.roomNum}</td>
            <td>{room.roomType}</td>
            <td>{room.roomPrice}</td>
            <td>
            <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/rooms/" + room.id}>Edit</Button>
                <Button size="sm" color="danger" onClick={() => remove(room.id)}>Delete</Button>
            </ButtonGroup>
            </td> 
        </tr>
    });

    return(
        <div>
            <Container>
            <div className="float-end">
                <Button color="success" tag={Link} to="/rooms/new">Add rooms</Button>
            </div>
            <h3>Rooms Informations below</h3>
            <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">ROOM NUMBER</th>
            <th width="20%">ROOM TYPE</th>
            <th width="20%">PRICE</th>
            <th width="10%">ACTION</th>
          </tr>
          </thead>
          <tbody>
          {hotelroom}
          </tbody>
        </Table>
            </Container>
        </div>
    );
};

export default HotelRoom;