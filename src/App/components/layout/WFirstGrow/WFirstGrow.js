import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './WFirstGrow.module.css';


const WFirstGrow = (props) => {
  return (
    <div className={styles.WFirstGrow} data-testid="WFirstGrow">
      {props.children}
    </div>
  )
};

WFirstGrow.propTypes = {};

WFirstGrow.defaultProps = {};

export default WFirstGrow;
