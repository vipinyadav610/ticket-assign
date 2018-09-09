import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from 'routes'
import store from './redux/store'

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
if (module.hot) {
  module.hot.accept()
}

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then(registration => {
//         // console.log('SW registered: ', registration)
//       })
//       .catch(registrationError => {
//         // console.log('SW registration failed: ', registrationError)
//       })
//   })
// }
