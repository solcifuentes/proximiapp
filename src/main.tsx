import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/presentation/index.scss'
import { Dashboard } from '@/presentation/pages/dashboard/Dashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
)
