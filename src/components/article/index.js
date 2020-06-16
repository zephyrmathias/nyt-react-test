import React from 'react';
import './styles.scss'

const article = (props) => {
  const { detail } = props
  if(!detail) {
    return <span>Loading...</span>
  }
  return (
    <div className="article-component__main-container">
      <span>{detail.type}</span>
      <span>{detail.section}</span>
      <span>{detail.subsection}</span>
      <span>{detail.title}</span>
      <span>{detail.published_date}</span>
      <span>{detail.source}</span>
      <span>{detail.abstract}</span>
    </div>
  )
}

export default article