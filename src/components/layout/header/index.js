import React from 'react';

import SearchInput from '../../search-input'
import './styles.scss'

const header = () => {
  return (
    <div className="header-component__main-container">
      <span className="header-component__nyt-icon"/>
      <SearchInput />
    </div>
  )
}

export default header