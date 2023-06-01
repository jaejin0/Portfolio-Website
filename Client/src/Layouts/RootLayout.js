import { NavLink, Outlet } from 'react-router-dom'

import './styleRootLayout.css'

import githubLogo from '../Assets/github-logo.svg'
import devpostLogo from '../Assets/devpost-logo.svg'
import linkedinLogo from '../Assets/linkedin-logo.svg'

export default function RootLayout() {
    return (
        <div>
            <Header></Header>
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    )
}

function Header() {
  return (
    <header>
      <nav>
        <NavLink className="logo" to='/'>Jaejin</NavLink>
        <div className='navbar'>
          <ul>
            <li>
              <NavLink className="navLink" to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className="navLink" to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink className="navLink" to='/experiences'>Experiences</NavLink>
            </li>
            <li>
              <NavLink className="navLink" to='/projects'>Projects</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <nav>
        <NavLink className="navLink" to='/'>Jaejin portfolio</NavLink>  
        <ul>
          <li className="item">
            <a href="https://github.com/jaejin0">
              <img className='icon' src={ githubLogo }></img>
            </a>
          </li>
          <li className="item">
            <a href="https://devpost.com/jaejin0109">
              <img className='icon' src={ devpostLogo }></img>
            </a>
          </li>
          <li className="item">
            <a href="https://www.linkedin.com/in/jaejincha/">
              <img className='icon' src={ linkedinLogo }></img>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}