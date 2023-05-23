import { NavLink } from 'react-router-dom'

function Home() {

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col w-75">
                    Hello my name is Jaejin Cha. I am a software engineer.
                    I am a senior computer science student at Texas A&M University.
                    I am interested in Autonomous driving, Artificial Intelligence, and Data Engineering.
                    I am using this website to build my portfolio of my work.
                    <div className="row py-5 w-100">
                        <NavLink className='btn btn-secondary active' to='/about'>Resume</NavLink>
                        <NavLink className='btn btn-secondary active' to='/projects'>Projects</NavLink>
                    </div>
                </div>
                <div className="col w-25">
                    right-side-image
                </div>
            </div>
        </div>
    )
}

export default Home