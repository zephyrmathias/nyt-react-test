import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

const articleImage = (props) => {
  console.log('props', props)
  const { detail, isArticleDetail } = props

  const imageLocation = detail.media || null
  console.log('imageLocation', imageLocation)

  let imageUrl = 'src/assets/img/new-york-times-dark.jpg'  ;
  if (imageLocation?.length > 0 && imageLocation[0]?.type === 'image') {
    const imgUrl = imageLocation[0]['media-metadata'].filter(data => data.format === 'mediumThreeByTwo210')
    if (imgUrl.length > 0) {
      imageUrl = imgUrl[0].url
    }
  }

  return (
    <div className="article-image-component__main-container">
      {imageUrl && !isArticleDetail && (
        <React.Fragment>
          <img src={imageUrl} className="article-image-component__image" />
          <span className="article-image-component__section">{detail.section_name || detail.section}</span>
        </React.Fragment>
      )}

      {imageUrl && isArticleDetail && (
        <div className="article-image-component__article-detail-container">
          <div className="article-image-component__image-with-copyright">
            <img src={imageUrl} className="article-image-component__image" />
            <span className="article-image-component__section">{detail.section_name || detail.section}</span>
            {detail.media?.length > 0 && detail.media[0]?.copyright && (
              <span className="article-image-component__copyright">&copy; {detail.media[0].copyright}</span>
            )}
          </div>
          {detail.media?.length > 0 && detail?.media[0]?.caption && (
            <span className="article-image-component__caption" dangerouslySetInnerHTML={{ __html: detail?.media[0]?.caption }} />
          )}
        </div>
      )}  
    </div>
  )
}

articleImage.defaultProps = {
  isArticleDetail: false,
}

articleImage.propTypes = {
  isArticleDetail: PropTypes.bool,
  detail: PropTypes.shape({
    media: PropTypes.array,
  }),
}

export default articleImage