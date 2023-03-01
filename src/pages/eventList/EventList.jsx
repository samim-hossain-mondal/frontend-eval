import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import Card from '../../components/card/Card';
import {BASE_URL, API_URL} from '../../constants/url';
import Search from '../../components/search/Search';
import Filter from '../../components/filter/Filter';
import './EventList.css';

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [data, setData] = useState([]);
  const fetchEvents = async () => {
    const response = await fetch(`${BASE_URL}/${API_URL}`);
    const data = await response.json();
    setEvents(data);
    setData(data);
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  console.log(events);
  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`/event-details/${id}`);
  };
  const searchChangeHandler = (searchEvents) => {
    setEvents(searchEvents);
  };
  return (
    <div className='event-list'>
      <div className='event-list-header'>
        <Filter />
        <Search searchChangeHandler={searchChangeHandler} data={data}/>
      </div>
      <div className='event-list-body'>
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
      </div>
    </div>
  );
}