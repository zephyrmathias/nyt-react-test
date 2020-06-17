import React from 'react';
import { Link } from 'react-router-dom'

import SearchInput from 'components/search-input'
import './styles.scss'

const header = () => {
  return (
    <div className="header-component__main-container">
      <Link to="/">
        <span className="header-component__nyt-icon"/>
      </Link>
      <SearchInput />
    </div>
  )
}

export default header