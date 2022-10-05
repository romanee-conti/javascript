import React from 'react';
import styles from './EmployeeCard.module.scss';
import Counter from '../Counter';

const EmployeeCard = (props) => {
    const {name, role} = props.data;

  return (
    <main className={styles.employeeCard}>
        <h4>Name:</h4>
        <h3>{name}</h3>
        <h4>Role:</h4>
        <h3>{role}</h3>
        <div className={styles.cardCounter}>
        < Counter />
        </div>
    </main>
  )
}

export default EmployeeCard