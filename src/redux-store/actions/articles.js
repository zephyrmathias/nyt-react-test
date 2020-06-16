import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  SORT_DATA_ASCENDING,
  SORT_DATA_DESCENDING
} from '../types';
import {
  getMostPopularArticles,
  getSearchedArticle
} from 'lib/articles'

export const fetchArticle = (option) => async (dispatch) => {
  dispatch({
    type: FETCH_ARTICLE_REQUEST,
  });
  console.log('came here aswell');

  try {

    const data = await getMostPopularArticles({ timePeriod: option.timePeriod })
    return dispatch({
      type: FETCH_ARTICLE_SUCCESS,
      payload: data.results,
    });
  } catch (err) {
    return dispatch({
      type: FETCH_ARTICLE_FAILURE,
      error: 'Something went wrong',
    });
  }
};

export const searchArticle = (option) => async (dispatch) => {
  dispatch({
    type: FETCH_ARTICLE_REQUEST,
  });
  try {
    const data = await getSearchedArticle({ query: option.query })
    return dispatch({
      type: FETCH_ARTICLE_SUCCESS,
      payload: data.response.docs,
    });
  } catch (err) {
    return dispatch({
      type: FETCH_ARTICLE_FAILURE,
      error: 'Something went wrong',
    });
  }
};

export const sortDataAscending = () => dispatch => {
  dispatch({
    type: SORT_DATA_ASCENDING,
  });
};

export const sortDataDescending = () => dispatch => {
  dispatch({
    type: SORT_DATA_DESCENDING,
  });
};