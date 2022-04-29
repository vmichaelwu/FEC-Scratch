import React, { useState } from 'react';
import Item from './Item.jsx';

const axios = require('axios');

const List = () => {
  const [checklist, useChecklist] = useState('');

  const getList = () => {
    axios
      .get('/api/checklist', {
        params: {
          id: 1,
        },
      })
      .then((response) => {
        useChecklist(response.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div>
      List goes Header
      <button onClick={getList}>Get List</button>
      {checklist.length > 0 && checklist.map((todo) => <Item todo={todo} />)}
    </div>
  );
};

export default List;
