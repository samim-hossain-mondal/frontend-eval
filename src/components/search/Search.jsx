/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

export default function Search() {
  const [search, setSearch] = useState('');
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <div className="search">
      <div className='search-input'>
        <input value={search} placeholder="  EVENT NAME" onChange={searchHandler} />
      </div>
      <div className='search-logo'>
        <FontAwesomeIcon fontSize='20' onClick={searchHandler} icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}