import React from 'react';
import styles from './App.module.scss';
import EmployeeCard from './components/EmployeeCard';
import NavBar from './components/NavBar';

import data from './data/team';

const App = () => {

const getEmployeeCardJsx = (data) => (
  <div className={styles.card} key={data.id}>
    <EmployeeCard data={data} />
  </div>
);

  return (
    <>
    <nav className={styles.nav}>
    < NavBar />
    </nav>
    <section className={styles.content}>
      {data.map(getEmployeeCardJsx)}
    </section>
    </>
  );
};

export default App;

// pseudo-code plan
// need to create a card element
// mechanism to iterate over employee list using props
// useState for the counter component