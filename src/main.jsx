import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import { Provider } from 'react-redux'
import pStore from './redux/searchStore.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={pStore}>
    <BrowserRouter>
      <App />
  
</BrowserRouter> 
    </Provider>
 
</React.StrictMode>,
)
