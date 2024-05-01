import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './shared/AppNavbar';

const UpdateHotelRoom = () => {

const initialState = {
    id: '',
    roomNum: '',
    roomType: '',
    roomPrice: ''
};

const [room, setRoom] = useState([initialState]);
const navigate = useNavigate();
const { id } = useParams();

useEffect(() => {
    if (id !== 'new') {
      fetch(`/room/${id}`)
        .then(response => response.json())
        .then(data => setRoom(data));
    }
  }, [id, setRoom]);


const handleChange = (event) => {
    const { name, value } = event.target

    setRoom({ ...room, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(`/room${room.id ? `/${room.id}` : ''}`, {
      method: (room.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(room)
    });
    setRoom(initialState);
    navigate('/rooms');
  }

  const title = <h2>{room.id ? 'Edit Room' : 'Add Room'}</h2>;
return(
    <div>
      <AppNavbar />
        <Container>
            {title}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="id">ID</Label>
                    <Input type="text" name="id" id="id" value={room.id || ''}
                    onChange={handleChange} autoComplete="id"/>
                </FormGroup>
                <FormGroup>
                    <Label for="roomNum">roomNum</Label>
                    <Input type="text" name="roomNum" id="roomNum" value={room.roomNum || ''}
                    onChange={handleChange} autoComplete="roomNum"/>
                </FormGroup>
                <FormGroup>
                    <Label for="id">roomType</Label>
                    <Input type="text" name="roomType" id="roomType" value={room.roomType || ''}
                    onChange={handleChange} autoComplete="roomType"/>
                </FormGroup>
                <FormGroup>
                    <Label for="id">roomPrice</Label>
                    <Input type="text" name="roomPrice" id="roomPrice" value={room.roomPrice || ''}
                    onChange={handleChange} autoComplete="roomPrice"/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/rooms">Cancel</Button>
          </FormGroup>
            </Form>
        </Container>
    </div>
)
};

export default UpdateHotelRoom;