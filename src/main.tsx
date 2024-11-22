import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style1.css'
import MainPage from './MainPage/MainPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < MainPage></MainPage>
  </StrictMode>,
)
