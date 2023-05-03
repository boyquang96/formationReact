import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MainForm.module.css';

let mainFormInitialState = {}

const MainForm = () => {
  const [state, setstate] = useState(mainFormInitialState)

  useEffect(() => {
    return () => {

    };
  }, [state])


  return (
    <div className={styles.MainForm} data-testid="MainForm">
      MainForm Component
    </div>
  )
};

MainForm.propTypes = {};

MainForm.defaultProps = {};

export default MainForm;
