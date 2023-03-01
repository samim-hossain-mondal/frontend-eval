import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid} from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {BASE_URL, API_URL} from '../../constants/url';
import './CardDetails.css';

export default function CardDetails() {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [buttonText, setButtonText] = useState('Register');
  const [event, setEvent] = useState({});
  const fetchEvent = async () => {
    const response = await fetch(`${BASE_URL}/${API_URL}/${id}`);
    const data = await response.json();
    setEvent(data);
    setIsBookmarked(data.isBookmarked);
    setIsRegistered(data.isRegistered);
    setButtonText(data.isRegistered ? 'Unregister' : 'Register');
  };
  useEffect(() => {
    fetchEvent();
  }, []);

  const bookmarkHandler = async () => {
    setIsBookmarked(!isBookmarked);
    await axios.patch(`${BASE_URL}/${API_URL}/${id}`, {
      isBookmarked: !isBookmarked,
    });
  };
  const registerHandler = async () => {
    setIsRegistered(!isRegistered);
    setButtonText(!isRegistered ? 'Unregister' : 'Register');
    await axios.patch(`${BASE_URL}/${API_URL}/${id}`, {
      isRegistered: !isRegistered,
    });
  };
  return (
    <div className='card-details'>
      <div className="card-d">
        <div className="card-image-d">
          <img src={event.imgUrl} alt="event" />
        </div>
        <div className="card-content-d">
          <div className="card-title-d">
            <h3>{event.name}</h3>
          </div>
          <div className="card-description-d">
            <p>{event.description}</p>
          </div>
          <div className="card-venue-d">
            <div>
              <a>VENUE: {event.venue}</a>
            </div>
            <div>
              <a>DATE: {event.datetime}</a>
            </div>
          </div>
        </div>
        <div className='card-footer-d'>
          <div>
            {
              isRegistered ? 
                (
                  <div className='registration-d'>
                    <FontAwesomeIcon icon= {faCircleCheck} fontSize='25' color='#A0F3AD' onClick={registerHandler}/> 
                    <p>REGISTERED</p>
                  </div>
                ) 
                : event.areSeatsAvailable ? 
                  (
                    <p></p>
                  ) 
                  : 
                  (
                    <div className='seats-d'>
                      <FontAwesomeIcon icon= {faCircleXmark} fontSize='25' color='#ECECAB'/>
                      <p>NO SEATS AVAILABLE</p>
                    </div>
                  )
            }
          </div>
          <div className='bookmark-btn-d'>
            <button>
              {
                <FontAwesomeIcon icon={ isBookmarked ? faBookmarkSolid : faBookmarkRegular} color='#EA8282' fontSize='25' onClick={bookmarkHandler}/> 
              }
            </button>
          </div>
        </div>
        <div className='register-unregister'>
          {
            event.areSeatsAvailable ?
              (
                <button className='register-btn-d' onClick={registerHandler}><b>{buttonText}</b></button>
              )
              :
              (
                <a></a>
              )
          }
        </div>
      </div>
    </div>
  );
}