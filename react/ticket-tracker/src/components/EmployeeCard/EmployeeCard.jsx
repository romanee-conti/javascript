import React from 'react';
import styles from './EmployeeCard.module.scss';
import Counter from '../Counter';

const EmployeeCard = (props) => {
    const {name, role} = props.data;

  return (
    <div>
        <h3>Name: {name}</h3>
        <h3>Role: {role}</h3>
        < Counter />
    </div>
  )
}

export default EmployeeCard