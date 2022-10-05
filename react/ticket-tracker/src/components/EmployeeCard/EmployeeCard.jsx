import React from 'react';
import styles from './EmployeeCard.module.scss';
import Counter from '../Counter';

const EmployeeCard = () => {
  return (
    <div>
        <h3>Name: Mike Skinner</h3>
        <h3>Role: Frontman</h3>
        < Counter />
    </div>
  )
}

export default EmployeeCard