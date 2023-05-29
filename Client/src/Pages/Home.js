import useFetch from '../Fetch/useFetch'
import { NavLink } from 'react-router-dom'

import Pending from '../Fetch/Pending'
import Error from '../Fetch/Error'

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
            <div>
                { home.intent }
                { home.curPosition }
            </div>
            <NavLink className='btn btn-secondary active' to='/about'>Resume</NavLink>
            <NavLink className='btn btn-secondary active' to='/projects'>Projects</NavLink>
            right-side-image
        </div>
    )
}

export default Home