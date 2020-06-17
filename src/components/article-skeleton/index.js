import React from 'react';
import ContentLoader from 'react-content-loader'

import './styles.scss'

const articleSkeleton = () => {
  return (
    <div className="article-skeleton-component__main-container">
      <ContentLoader
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        width={'100%'}
        height={350}
      >
        <rect x="0" y="0" rx="2" ry="2" width={'100%'} height={180} />

        <rect x="0" y="185" rx="2" ry="2" width={'100%'} height={30} />

        <rect x="0" y="220" rx="2" ry="2" width={100} height={30} />
        <rect x="0" y="255" rx="2" ry="2" width={100} height={30} />

      </ContentLoader>
    </div>
  )
}

export default articleSkeleton