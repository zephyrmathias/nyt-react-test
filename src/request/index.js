import axios from 'axios'

export function makeRequest({
  body = null,
  method = 'get',
  url = '',
}) {
  return axios({
    method,
    url,
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    ...(Boolean(body) && { data: JSON.stringify(body) }),
  })
    .then(res => res.data)
    .catch((error) => { throw error.response })
}
