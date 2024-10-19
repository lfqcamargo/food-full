import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { useConstantContext } from '../../context/ConstantContext'

export function Home() {
  const { name } = useConstantContext()
  return (
    <>
      <Helmet title={name} />
      <div
        className="container relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/home-mobile.jpg')",
        }}
      ></div>
      <Button className="absolute bottom-10 right-2">
        <Link className="text-secondary" to="/menu">
          Cardápio
        </Link>
      </Button>
    </>
  )
}
