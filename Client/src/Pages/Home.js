import useFetch from '../Fetch/useFetch'
import { NavLink } from 'react-router-dom'

import Pending from '../Fetch/Pending'
import Error from '../Fetch/Error'

import './HomeStyle.css'

import image from '../Assets/team_building.svg'

function Home() {

    const { data, isPending, error } = useFetch('/api/home')

    return (
        <div>
            { isPending && <Pending/> }
            { error && <Error err={ error }/>}
            { data && <HomeContent data={ data }/>}
        </div>
    )
}

function HomeContent(props) {

    const home = props.data

    return (
        <div>
            <div className='content'>
                <div className='text'>
                    <h1>It's nice to meet you.</h1>
                    { home.curPosition }
                    { home.intent }
                </div>
                <nav>
                    <NavLink className='btn btn-secondary active' to='/about'>Resume</NavLink>
                    <NavLink className='btn btn-secondary active' to='/projects'>Projects</NavLink>
                </nav>
            </div>
            <img src={ image }></img>
        </div>
    )
}

export default Home