import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App />
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#FDF6F0',
          color: '#5C2D4E',
          border: '1px solid #C9956C33',
          fontFamily: 'Raleway, sans-serif',
        },
        error: {
          style: {
            background: '#5C2D4E',
            color: '#FDF6F0',
            border: '1px solid #C9956C',
          },
        },
      }}
    />
    </>
  </StrictMode>,
)
