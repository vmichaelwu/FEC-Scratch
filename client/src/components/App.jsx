import React from 'react';

import Header from '../components/Header.jsx';
import AddForm from '../components/AddForm.jsx';
import List from '../components/List.jsx';

const App = () => {
  return (
    <div>
      App begins here
      <div id='testing'>Testing</div>
      <Header />
      <AddForm />
      <List />
    </div>
  );
};

export default App;
