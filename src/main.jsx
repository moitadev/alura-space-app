import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FontStyles from './components/FontStyles/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>,
)
