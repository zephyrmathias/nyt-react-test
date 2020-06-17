import React from 'react';
import PropTypes from 'prop-types';

import ArticleSkeleton from '../../components/article-skeleton'
import './styles.scss'

const loading = (props) => {
  return (
    <div className="loading-component__main-container">
      {[...Array(props.elementsLoading)].map((e, i) => {
        return <ArticleSkeleton />
      })}
    </div>
  )
}

loading.defaultProps = {
  elementsLoading: 1,
}

loading.propTypes = {
  elementsLoading: PropTypes.number,
}

export default loading