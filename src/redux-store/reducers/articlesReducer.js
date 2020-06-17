import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  SEARCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  SORT_DATA_ASCENDING,
  SORT_DATA_DESCENDING,
  SAVE_SELECTED_ARTICLE,
  RESET_SEARCH_ARTICLE
} from '../types';

const INITIAL_STATE = { 
  payload: null,
  searchedArticles: null,
  orderBy: '',
  selectedArticle: null,
  isFetching: true
};

const articleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_ARTICLE_SUCCESS:
      return { ...state, isFetching: false, payload: action.payload };
    case SEARCH_ARTICLE_SUCCESS:
      return { ...state, isFetching: false, searchedArticles: action.payload };
    case FETCH_ARTICLE_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    case SORT_DATA_ASCENDING:
      const ascendingData = state?.payload?.sort(function(a, b) {
        return new Date(a.published_date) - new Date(b.published_date);
      })
      console.log('Ascending', ascendingData)
      return {
        ...state,
        payload: ascendingData,
        orderBy: 'ascending',
      };
    case SORT_DATA_DESCENDING:
      const descendingData = state?.payload?.sort(function(a, b) {
        return new Date(b.published_date) - new Date(a.published_date);
      })
      console.log('descendingData', descendingData)

      return { 
        ...state,
        payload: descendingData,
        orderBy: 'descending',
      };
    case SAVE_SELECTED_ARTICLE:
      return { ...state, selectedArticle: action.selectedArticle };
    case RESET_SEARCH_ARTICLE:
      return { ...state, isFetching: false, searchedArticles: null };
    default:
      return state;
  }
};

export default articleReducer;