import React from 'react';
import Search from '../../components/search/Search';
import Filter from '../../components/filter/Filter';
import Body from '../../components/body/Body';
import './EventList.css';

export default function EventList() {
  return (
    <div className='event-list'>
      <div className='event-list-header'>
        <Filter />
        <Search />
      </div>
      <div className='event-list-body'>
        <Body />
      </div>
    </div>
  );
}