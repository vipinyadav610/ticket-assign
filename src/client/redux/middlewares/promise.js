import cookies from 'js-cookies'
const promiseMiddleware = () => {
  return next => action => {
    const { promise, type, token, ...rest } = action

    if (!promise) return next(action)

    const SUCCESS = type + '_SUCCESS'
    const REQUEST = type + '_REQUEST'
    const FAILURE = type + '_FAILURE'
    next({ ...rest, type: REQUEST })
    return promise
      .then(response => response.json())
      .then(response => {
        next({ ...rest, response: response, type: SUCCESS })
        if (token) {
          const secure = window.location.protocol === 'https'
          cookies.setItem(
            'API_TOKEN',
            response.data.token,
            undefined,
            '/',
            undefined,
            secure
          )
        }
        return true
      })
      .catch(error => {
        next({ ...rest, error, type: FAILURE })
        if (error.status.code == 401) {
          cookies.remove('API_TOKEN')
        }
        return false
      })
  }
}
export default promiseMiddleware
