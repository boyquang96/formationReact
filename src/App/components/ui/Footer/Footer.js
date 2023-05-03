import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

let footerInitialState = {}

const Footer = () => {
  const [state, setstate] = useState(footerInitialState)

  useEffect(() => {
    return () => {

    };
  }, [state])


  return (
    <div className={styles.Footer} data-testid="Footer">
      Footer Component
    </div>
  )
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
