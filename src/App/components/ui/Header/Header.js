import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.Header} data-testid="Header">
      <h1>Formation ReactJs</h1> 
    </div>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
