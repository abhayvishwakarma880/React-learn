import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import W from "./W.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <W />
  </StrictMode>,
)
