import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import './index.css'
import ScrollableIcons from './Category-list.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ScrollableIcons />
  </StrictMode>
)
