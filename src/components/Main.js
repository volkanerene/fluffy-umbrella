import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  const initializeTimes = () => {
    return fetchAPI(new Date().toISOString().split('T')[0]);
  };

  const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
      return fetchAPI(action.payload);
    }
    return state;
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmed');
    } else {
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <section className="main-section">
      <h2>Reserve a Table at Little Lemon</h2>
      <p>Enjoy the finest Mediterranean cuisine in a cozy atmosphere.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </section>
  );
}

export default Main;
