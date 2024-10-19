import { Outlet } from 'react-router-dom'

import Footer from '../app/components/footer'
import Header from '../app/components/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
