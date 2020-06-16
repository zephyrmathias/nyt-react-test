import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from 'components/layout';
import PropTypes from 'prop-types';

import { fetchArticle } from 'redux-store/actions/articles';
import ArticlesList from 'components/articles-list'
import FilterArticle from 'components/filter-article'

const home = (props) => {
  const [timePeriod, setTimePeriod] = useState(7)

  useEffect(() => {
    props.fetchArticle({ timePeriod })
  }, [timePeriod])

  return (
    <Layout>
      <FilterArticle />
      <ArticlesList />
    </Layout>
  )
}

const mapDispatchToProps = {
  fetchArticle
}

export default connect(
  null,
  mapDispatchToProps
)(home);