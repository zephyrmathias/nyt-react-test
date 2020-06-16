import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDebounce } from 'use-debounce';

import { searchArticle } from 'redux-store/actions/articles';
import './styles.scss'

const searchInput = (props) => {
  const [searchText, setSearchText] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [searchTextValue] = useDebounce(searchText, 1000);

  useEffect(() => {
    if(searchTextValue) {
      props.searchArticle({ query: searchTextValue })
    }
  }, [searchTextValue])

  const handleSearchCancel = () => {
    setShowInput(false)
    setSearchText('')
  }

  return (
    <div className="search-input-component__main-container">
      {!showInput && <span className="search-input-component__search-icon" onClick={() => setShowInput(!showInput)}/>}
      <input
        type="text"
        value={searchText}
        placeholder="Search News"
        className={`search-input-component__input ${showInput ? 'active' : ''} `}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText && showInput && (
        <span className="search-input-component__cancel-icon" onClick={handleSearchCancel}/>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    articles: state.newsArticles.payload
  } 
}

const mapDispatchToProps = {
  searchArticle
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(searchInput);