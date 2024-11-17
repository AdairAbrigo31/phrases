import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Phrases from './Phrases/Phrases.tsx'
import "./styles/global.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < Phrases />
  </StrictMode>,
)
