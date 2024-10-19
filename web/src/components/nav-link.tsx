import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 p-2 font-medium text-secondary data-[current=true]:rounded-e data-[current=true]:bg-background data-[current=true]:text-foreground"
      {...props}
    />
  )
}
