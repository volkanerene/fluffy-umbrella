export const fetchAPI = (date) => {
    // Mock response: times are the same for all dates for simplicity
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };
  
  export const submitAPI = (formData) => {
    // Mock submission: always returns true
    console.log('Form Data Submitted:', formData);
    return true;
  };
  