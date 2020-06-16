import  { makeRequest } from '../request'

export function getMostPopularArticles(option) {
  const request = {
    method: 'get',
    url: `https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/mostpopular/v2/viewed/${option.timePeriod}.json?api-key=${process.env.REACT_APP_API_KEY}`,
  }

  return makeRequest(request);
}


export function getSearchedArticle(option) {
  const request = {
    method: 'get',
    url: `https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.REACT_APP_API_KEY}&q=${option.query}`
  }

  return makeRequest(request);
}