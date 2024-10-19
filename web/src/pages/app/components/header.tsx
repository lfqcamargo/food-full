import { NavLink } from '@/components/nav-link'

export default function Header() {
  return (
    <header className="flex bg-primary">
      <div className="flex">
        <NavLink
          className="container bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/logo-mobile.png')" }}
          to={'/'}
        ></NavLink>
      </div>
      <nav>
        <ul className="flex gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Cardápio</NavLink>
          <NavLink to="/orders">Pedidos</NavLink>
        </ul>
      </nav>
    </header>
  )
}
