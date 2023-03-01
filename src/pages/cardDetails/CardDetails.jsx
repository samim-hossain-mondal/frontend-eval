import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Card from '../../components/card/Card';
import {BASE_URL, API_URL} from '../../constants/url';
import './CardDetails.css';

export default function CardDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const fetchEvent = async () => {
    const response = await fetch(`${BASE_URL}/${API_URL}/${id}`);
    const data = await response.json();
    setEvent(data);
  };
  useEffect(() => {
    fetchEvent();
  }, []);
  console.log(event);
  return (
    <div className='card-details'>
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
      />
    </div>
        
  );
}