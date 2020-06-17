import React from 'react';
import { connect } from 'react-redux';

import Article from 'components/article'
import Loading from 'components/loading'
import Error from 'components/error'

import './styles.scss'

const articlesList = (props) => {

  if (props.isArticlesFetching) {
    return <Loading elementsLoading={8} />
  }

  if (props.error) {
    return <Error />
  }

  const articleList = props.searchedArticles || props.articles || [];

  if (articleList?.length === 0) {
    return (
      <div className="article-list-component__main-container">
        No articles
      </div>
    )
  }

  return (
    <div className="article-list-component__main-container">
      {articleList.map((article, index) => <Article detail={article} key={index} />)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    articles: state.newsArticles.payload,
    isArticlesFetching: state.newsArticles.isFetching,
    searchedArticles: state.newsArticles.searchedArticles,
  } 
}

export default connect(
  mapStateToProps
)(articlesList);