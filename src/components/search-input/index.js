import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { useHistory } from 'react-router-dom';

import { searchArticle, resetSearchedArticles } from 'redux-store/actions/articles';
import './styles.scss'

const searchInput = (props) => {
  let inputSearchArticle = useRef()
  const history = useHistory();
  const [searchText, setSearchText] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [searchTextValue] = useDebounce(searchText, 1000);

  useEffect(() => {
    if(searchTextValue) {
      history.push('/');
      props.searchArticle({ query: searchTextValue })
    }
  }, [searchTextValue])

  const handleSearchClick = () => {
    setShowInput(!showInput)
    inputSearchArticle.current.focus()
  }
  const handleSearchCancel = () => {
    props.resetSearchedArticles()
    setShowInput(false)
    setSearchText('')
  }

  return (
    <div className="search-input-component__main-container">
      <span 
        className={`search-input-component__search-icon ${!showInput ? 'active' : ''}`} 
        onClick={handleSearchClick}
      />
      <input
        type="text"
        ref={inputSearchArticle}
        id="article-search-input"
        placeholder="Search News"
        value={searchText}
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
  searchArticle,
  resetSearchedArticles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(searchInput);