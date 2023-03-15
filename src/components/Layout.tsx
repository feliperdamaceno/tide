// Components
import Footer from './Footer'

// Types
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
