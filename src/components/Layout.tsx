// Components
import Header from './Header'
import Footer from './Footer'

// Context
import TimerProvider from '../context/TimerProvider'

// Types
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <TimerProvider>
      <Header />
      {children}
      <Footer />
    </TimerProvider>
  )
}
