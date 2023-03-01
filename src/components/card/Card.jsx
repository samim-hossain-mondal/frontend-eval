import React, {useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid} from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import proptypes from 'prop-types';
import {BASE_URL, API_URL} from '../../constants/url';
import './Card.css';

export default function Card({ name, description, venue, imgUrl, datetime, areSeatsAvailable, clickHandler, id, isRegistered, isBookmarked}) {
  const [bookmark, setBookmark] = useState(isBookmarked);
  const bookmarkHandler = async () => {
    setBookmark(!bookmark);
    await axios.patch(`${BASE_URL}/${API_URL}/${id}`, {
      isBookmarked: !bookmark
    });
  };

  return (
    <div className="card">
      <div className="card-image" onClick={() => clickHandler(id)}>
        <img src={imgUrl} alt="event" />
        <hr/>
      </div>
      <div className="card-content" onClick={() => clickHandler(id)}>
        <div className="card-title">
          <h3>{name}</h3>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
        <div className="card-venue">
          <div>
            <a>VENUE: {venue}</a>
          </div>
          <div>
            <a>DATE: {datetime}</a>
          </div>
        </div>
      </div>
      <div className='card-footer'>
        <div>
          {
            isRegistered ? 
              (
                <div className='registration'>
                  <FontAwesomeIcon icon= {faCircleCheck} fontSize='25' color='#A0F3AD' /> 
                  <p>REGISTERED</p>
                </div>
              ) 
              : areSeatsAvailable ? 
                (
                  <p></p>
                ) 
                : 
                (
                  <div className='seats'>
                    <FontAwesomeIcon icon= {faCircleXmark} fontSize='25' color='#ECECAB'/>
                    <p>NO SEATS AVAILABLE</p>
                  </div>
                )
          }
        </div>
        <div className='bookmark-btn'>
          <button>
            {
              <FontAwesomeIcon icon={bookmark ? faBookmarkSolid : faBookmarkRegular} onClick={bookmarkHandler} color='#EA8282' fontSize='25'/>
            }
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: proptypes.number,
  name: proptypes.string,
  description: proptypes.string,
  venue: proptypes.string,
  datetime: proptypes.string,
  timezone: proptypes.string,
  areSeatsAvailable: proptypes.bool,
  isRegistered: proptypes.bool,
  isBookmarked: proptypes.bool,
  imgUrl: proptypes.string,
  clickHandler: proptypes.func,
};