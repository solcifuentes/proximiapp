import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/presentation/index.scss'
import { Dashboard } from '@/presentation/pages/dashboard/Dashboard.tsx'
import { Footer } from './presentation/components/Footer'
import { Header } from './presentation/components/Header'
import { Intro } from './presentation/components/Intro'
import Carousel from './presentation/components/Carousel'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Dashboard />
    <Carousel />
    <Footer />
  </React.StrictMode>,
)
