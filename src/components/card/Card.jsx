import React from 'react';
import proptypes from 'prop-types';
import './Card.css';

export default function Card({ name, description, venue, imgUrl, datetime, areSeatsAvailable, clickHandler, id}) {
  return (
    <div className="card" onClick={() => clickHandler(id)}>
      <div className="card-image">
        <img src={imgUrl} alt="event" />
        <hr/>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{name}</h3>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
        <div className="card-venue">
          <p>VENUE: {venue}</p>
        </div>
        <div>
          <p>DATE: {datetime}</p>
        </div>
        <div className='card-footer'>
          <div>
            {areSeatsAvailable ? <p>Seats Available</p> : <p>Seats Not Available</p>}
          </div>
          <div>
            <button>Bookmark</button>
          </div>
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