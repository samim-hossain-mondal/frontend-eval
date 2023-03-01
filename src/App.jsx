import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/elements/header/Header';
import Footer from './components/elements/footer/Footer';
import EventList from './pages/eventList/EventList';
import CardDetails from './pages/cardDetails/CardDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path='/event-details/:id' element={<CardDetails />} />
        <Route path="*" element={<h1>404 - Not Found!</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
