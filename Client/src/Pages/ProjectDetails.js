import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../Fetch/useFetch'

import Pending from '../Fetch/Pending'
import Error from '../Fetch/Error'

function ProjectDetails() {
    
    const { id } = useParams()
    const { data, isPending, error } = useFetch('/api/projects/' + id)

    return (
        <div>
            { isPending && <Pending/> }
            { error && <Error err={ error }/>}
            { data && <ProjectDetailsContent data={ data }/>}
        </div>
    )
}

function ProjectDetailsContent(props) {
    
    const navigate = useNavigate()
    const project = props.data

    const relevantLinks = []
    for (let i = 0; i < project.details.links.relevantLinks.length; i++) {
        relevantLinks.push(
            <ul>{ project.details.links.relevantLinks[i] }</ul>
        )
    }
    const skills = []
    for (let i = 0; i < project.skills.length; i++) {
        skills.push(
            <ul>{ project.skills[i] }</ul>
        )
    }

    return (
        <div>
            <button onClick={() => { navigate('/projects') }}>X</button>
            <div>
                { project.mainImage }
                { project.title }
                { project.desc }
                { project.date.start }
                { project.date.end }

                <div>
                    { project.details.articles.situation }
                    {/* { project.details.images } */}
                    { project.details.articles.task }
                    {/* { project.details.images } */}
                    { project.details.articles.action }
                    {/* { project.details.images } */}
                    { project.details.articles.result }
                </div>
                { project.details.links.github }
                { project.details.links.devpost }
                { relevantLinks }
                { skills }
            </div>
        </div>
    )
}

export default ProjectDetails