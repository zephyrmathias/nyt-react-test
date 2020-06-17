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
      return {
        ...state,
        isFetching: true
      };

    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        payload: action.payload
      };

    case SEARCH_ARTICLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        searchedArticles: action.payload
      };

    case FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case SORT_DATA_ASCENDING:
      let dataToSortAscending = state?.searchedArticles || state?.payload

      const ascendingData = dataToSortAscending.sort(function(a, b) {
        return new Date(a.pub_date || a.published_date) - new Date(b.pub_date || b.published_date);
      })

      if (state?.searchedArticles) {
        return {
          ...state,
          searchedArticles: ascendingData,
          orderBy: 'ascendingSearch',
        };
      }

      return {
        ...state,
        payload: ascendingData,
        orderBy: 'ascending',
      };

    case SORT_DATA_DESCENDING:
      let dataToSortDescending = state?.searchedArticles || state?.payload

      const descendingData = dataToSortDescending.sort(function(a, b) {
        return new Date(b.pub_date || b.published_date) - new Date(a.pub_date || a.published_date);
      })

      if (state?.searchedArticles) {
        return {
          ...state,
          searchedArticles: descendingData,
          orderBy: 'descendingSearch',
        };
      }

      return { 
        ...state,
        payload: descendingData,
        orderBy: 'descending',
      };

    case SAVE_SELECTED_ARTICLE:
      return {
        ...state,
        selectedArticle: action.selectedArticle
      };

    case RESET_SEARCH_ARTICLE:
      return {
        ...state,
        isFetching: false,
        searchedArticles: null
      };

    default:
      return state;
  }
};

export default articleReducer;