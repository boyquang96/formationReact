import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

let headerInitialState = {}

const Header = () => {
  const [state, setstate] = useState(headerInitialState)

  useEffect(() => {
    return () => {

    };
  }, [state])


  return (
    <div className={styles.Header} data-testid="Header">
      Header Component
    </div>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
