import { Link } from 'gatsby'
import { nav } from '../styles/components.module.scss'

export interface NavProps {}

export function Nav({}: NavProps) {
  return (
    <nav className={nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
