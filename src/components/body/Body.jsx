import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import Card from '../card/Card';
import {BASE_URL, API_URL} from '../../constants/url';
import './Body.css';

export default function Body() {
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    const response = await fetch(`${BASE_URL}/${API_URL}`);
    const data = await response.json();
    setEvents(data);
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  console.log(events);
  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`/event-details/${id}`);
  };
  return (
    <div className="card-container">
      {events.map((event) => (
        <Card 
          key={event.id}
          id={event.id} 
          name={event.name} 
          description={event.description} 
          venue={event.venue} 
          datetime={event.datetime} 
          timezone={event.datetime} 
          areSeatsAvailable={event.areSeatsAvailable} 
          isRegistered={event.isRegistered} 
          isBookmarked={event.isBookmarked} 
          imgUrl={event.imgUrl}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
}