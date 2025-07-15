import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageSections from './components/PageSections.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageSections />
  </StrictMode>,
)
