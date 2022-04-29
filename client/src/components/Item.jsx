import React from 'react';

const Item = ({ todo }) => {
  return (
    <div>
      <li>user_id: {todo.user_id}</li>
      <li>description: {todo.description}</li>
      <li>created: {todo.created_at}</li>
    </div>
  );
};

export default Item;
