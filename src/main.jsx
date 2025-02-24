import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'rsuite/dist/rsuite.min.css'
import { ContextUiProvider } from './context/uicontext.tsx'


ReactDOM.createRoot(document.getElementById('root')).render(
   <ContextUiProvider >
    <BrowserRouter>
      <React.StrictMode>
      <App />
    </React.StrictMode>
    </BrowserRouter>
  </ContextUiProvider>

)
