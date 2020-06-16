import React from 'react';
import { connect } from 'react-redux';

import Article from '../article'
import './styles.scss'

const articlesList = (props) => {
  console.log('props', props)
  return (
    <div className="article-list-component__main-container">
      {props?.articles?.map((article, index) => <Article detail={article} key={index} />)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    articles: state.newsArticles.payload
  } 
}

export default connect(
  mapStateToProps
)(articlesList);