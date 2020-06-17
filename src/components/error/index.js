import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

const loading = (props) => {
  return (
    <div className="error-component__main-container">
      <h1>
        Oops, something went wrong
      </h1>
    </div>
  )
}

loading.defaultProps = {
  loadingNumber: 1,
}

loading.propTypes = {
  loadingNumber: PropTypes.number,
}

export default loading