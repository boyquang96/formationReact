import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';

let templateNameInitialState = {}

const TemplateName = () => {
  const [state, setstate] = useState(templateNameInitialState)

  useEffect(() => {
    return () => {

    };
  }, [state])


  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  )
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
