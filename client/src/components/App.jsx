import React from 'react';

import styles from '../components/App.module.css';

import Header from '../components/Header.jsx';
import AddForm from '../components/AddForm.jsx';
import List from '../components/List.jsx';

const axios = require('axios');

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <AddForm />
      <List />
    </div>
  );
};

export default App;
