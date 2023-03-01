/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

export default function Search({searchChangeHandler, data}) {
  const [search, setSearch] = useState('');
  const searchHandler = (e) => {
    let searchInput = e.target.value;
    e.preventDefault();
    setSearch(e.target.value);
    if(e.target.value === ''){
      searchChangeHandler(data);
      return;
    }
    let searchEvents = data.filter((event) => event.name.toLowerCase().includes(search.toLowerCase().trim()));
    searchChangeHandler(searchEvents, searchInput);
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