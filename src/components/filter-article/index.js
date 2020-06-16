import React from 'react';
import { connect } from 'react-redux';

import { sortDataAscending, sortDataDescending } from 'redux-store/actions/articles';
import './styles.scss'

const filterArticle = (props) => {
  return (
    <div className="filter-article-component__main-container">
      Order By:
      <button onClick={() => props.sortDataAscending()}>Newest To Oldest</button>
      <button onClick={() => props.sortDataDescending()}>Oldest To Newest</button>
    </div>
  )
}

const mapDispatchToProps = {
  sortDataAscending,
  sortDataDescending
}

const mapStateToProps = (state) => {
  return { 
    articles: state.newsArticles.orderBy
  } 
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(filterArticle);