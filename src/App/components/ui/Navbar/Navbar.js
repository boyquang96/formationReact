import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

let navbarInitialState = {}

const Navbar = () => {
  const [state, setstate] = useState(navbarInitialState)

  useEffect(() => {
    return () => {

    };
  }, [state])


  return (
    <div className={styles.Navbar} data-testid="Navbar">
      Navbar Component
    </div>
  )
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
