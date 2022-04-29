import React, { useState } from 'react';
const axios = require('axios');

const AddForm = () => {
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const addToDo = (e) => {
    e.preventDefault();

    axios
      .post('/api/checklist', {
        description: description,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <form onSubmit={addToDo}>
      <label>
        Description:
        <input type='text' value={description} onChange={handleChange} />
      </label>
      <input type='submit' value='Add' />
    </form>
  );
};

export default AddForm;
