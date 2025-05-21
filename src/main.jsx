import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './route'
import Provider from './context/Provider'

createRoot(document.getElementById('root')).render(
  <Provider>
    <Router />
  </Provider>,
)
