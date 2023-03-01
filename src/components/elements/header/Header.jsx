import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const curr_path = location.pathname;
  const id = curr_path.split('/')[2];
  const navigate = useNavigate();
  const clickHandler = () => {
    if (curr_path === `/event-details/${id}`) {
      navigate('/');
    }
  };
  return (
    <div className='heading' onClick={clickHandler}>
      <a>EVENTIFY</a>
    </div>
  );
}