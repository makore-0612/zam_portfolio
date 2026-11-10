import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="h-dvh flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}
