import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Css/Style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)