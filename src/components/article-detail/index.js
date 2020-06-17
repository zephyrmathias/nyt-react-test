import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs'

import ArticleImage from '../article-image'
import './styles.scss'

const articleDetail = (props) => {
  const { detail } = props
  const history = useHistory();

  if (!detail) {
    history.push('/')
    return null
  }

  const handleClickBack = () => {
    history.goBack()
  }

  const publishedDate = dayjs(detail.pub_date || detail.published_date).format('DD MMM YYYY')
  return (
    <React.Fragment>
      <span onClick={handleClickBack} className="article-detail-component__back-link" />
      <div className="article-detail-component__main-container">
        <span className="article-detail-component__title">
          {detail.headline?.main|| detail.title}
        </span>
        <div className="article-detail-component__image-info-container">
          <ArticleImage detail={detail} isArticleDetail />
          <div className="article-detail-component__information-container">
            {detail.source && (
              <span className="article-detail-component__source">{detail.source}</span>
            )}
            <span className="article-detail-component__publishedDate">
              {publishedDate}
            </span>

            <span className="article-detail-component__abstract">
              {detail.abstract || detail.lead_paragraph}
            </span>

            <a href={detail.web_url || detail.url} target="_blank">
              Read Full Article
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return { 
    detail: state.newsArticles.selectedArticle
  } 
}

export default connect(
  mapStateToProps,
  null
)(articleDetail);