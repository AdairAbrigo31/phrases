import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style1.css'
import Phrases from './Phrases/Phrases.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < Phrases />
  </StrictMode>,
)
