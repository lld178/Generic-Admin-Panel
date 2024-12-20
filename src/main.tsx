import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'reset-css'
import '@/assets/styles/global.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import  store  from './store'
createRoot(document.getElementById('root')!).render(
  <Provider  store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>

)
