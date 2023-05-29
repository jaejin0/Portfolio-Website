import useFetch from '../Fetch/useFetch'
import { Link } from 'react-router-dom'

import Pending from '../Fetch/Pending'
import Error from '../Fetch/Error'

function Projects() {
    
    const { data, isPending, error } = useFetch('/api/projects')

    return (
        <div>
            { isPending && <Pending/> }
            { error && <Error err={ error }/>}
            { data && <ProjectsContent data={ data }/>}
        </div>
    )    
}

function ProjectsContent(props) {

    const projects = props.data

    const projectsSkills = new Map()
    for (let i = 0; i < projects.length; i++) {
        const skills = []
        for (let j = 0; j < projects[i].skills.length; j++) {
            skills.push(
                <ul>{ projects[i].skills[j] }</ul>
            )
        }
        projectsSkills.set(projects[i]._id, skills)
    }

    return (
        <div>
            <div>
                Here are my { projects.length } projects
            </div>
            <div>
                {projects.map((proj) => (
                    <div key={proj._id}>
                        <Link to={`/projects/${proj._id}`}>
                            <img src={ proj.mainImage } className='img-thumbnail w-`100'></img>
                            <div>{ proj.title }</div>
                            <div>{ proj.desc }</div>
                            <div>{ proj.date.start }</div>
                            <div>{ proj.date.end }</div>
                            <div>
                                <div>{ projectsSkills.get(proj._id) }</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects