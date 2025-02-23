import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalContextProvider from './contexts/GlobalContext.jsx'
import ScrollContextProvider from './contexts/ScrollContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GlobalContextProvider>
    <ScrollContextProvider>
    <App />
    </ScrollContextProvider>
  </GlobalContextProvider>
  </BrowserRouter>,
)
