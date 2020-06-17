import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs'

import { saveSelectedArticle } from 'redux-store/actions/articles'
import ArticleImage from '../article-image'
import './styles.scss'

const article = (props) => {
  const { detail } = props
  const history = useHistory();

  const handleArticleClick = () => {
    props.saveSelectedArticle({article: detail})
    history.push('/detail');
  }
  const publishedDate = dayjs(detail.pub_date || detail.published_date).format('DD MMM YYYY')

  return (
    <div 
      className="article-component__main-container" 
      onClick={handleArticleClick}
    >
      <ArticleImage detail={detail}/>
      <span className="article-component__title">
        {detail.headline?.main|| detail.title}
      </span>
      <span className="article-component__publishedDate">
        {publishedDate}
      </span>
      <span className="article-component__read-more">
        Read More
      </span>
    </div>
  )
}

const mapDispatchToProps = {
  saveSelectedArticle
}

export default connect(
  null,
  mapDispatchToProps
)(article);