import { NavLink, Outlet } from 'react-router-dom'

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
      <div className='container'>
        <div className='row'>
          <div className='col'>Jaejin Cha</div>
          <div className='col btn-group btn-group-toggle' data-toggle="buttons">
            <NavLink className='btn btn-secondary active' to='/'>Home</NavLink>
            <NavLink className='btn btn-secondary' to='/about'>About</NavLink>
            <NavLink className='btn btn-secondary' to='/projects'>Projects</NavLink>
          </div>
        </div>
      </div>
    )
  }
  
  function Footer() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>Jaejin Cha Portfolio</div>
          <div className='col'>
            <div className='container'>
              <sgv>github</sgv>
              <sgv>devpost</sgv>
              <sgv>linkedin</sgv>
            </div>
          </div>
        </div>
      </div>
    )
  }