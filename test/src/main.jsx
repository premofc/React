import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './nav.jsx'
import Color from './color.jsx'
import Event from './event.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Event />
  </StrictMode>,
)
