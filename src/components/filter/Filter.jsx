import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Filter.css';

export default function Filter() {
  return (
    <div className="filter">
      <div className='filter-icon'>
        <FontAwesomeIcon fontSize='20' icon={faFilter} />
      </div>
      <div className='filter-name'>
        <p>FILTER</p>
      </div>
      <div className='filter-arrow'>
        <FontAwesomeIcon fontSize='20' icon={faChevronUp} />
      </div>
    </div>
  );
}
