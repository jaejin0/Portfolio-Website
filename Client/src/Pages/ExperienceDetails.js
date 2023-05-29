import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../Fetch/useFetch'

import Pending from '../Fetch/Pending'
import Error from '../Fetch/Error'

function ExperienceDetails() {

    const { id } = useParams()
    const { data, isPending, error } = useFetch('/api/experiences/' + id)

    return (
        <div>
            { isPending && <Pending/> }
            { error && <Error err={ error }/>}
            { data && <ExperienceDetailsContent data={ data }/>}
        </div>
    )
}

function ExperienceDetailsContent(props) {

    const navigate = useNavigate()
    const experience = props.data

    const relevantLinks = []
    for (let i = 0; i < experience.details.links.relevantLinks.length; i++) {
        relevantLinks.push(
            <ul>{ experience.details.links.relevantLinks[i] }</ul>
        )
    }
    const skills = []
    for (let i = 0; i < experience.skills.length; i++) {
        skills.push(
            <ul>{ experience.skills[i]}</ul>
        )
    }

    return (
        <div>
            <button onClick={() => { navigate('/experiences') }}>X</button>
            <div>
                { experience.mainImage }
                <div>{ experience.header }</div>
                <div>{ experience.desc }</div>
                <div>{ experience.company }</div>
                <div>{ experience.title }</div>
                <div>{ experience.date.start }</div>
                <div>{ experience.date.end }</div>

                <div>
                    { experience.details.articles.situation }
                    {/* { project.details.images } */}
                    { experience.details.articles.task }
                    {/* { project.details.images } */}
                    { experience.details.articles.action }
                    {/* { project.details.images } */}
                    { experience.details.articles.result }
                </div>
                { experience.details.links.github }
                { relevantLinks }
                { skills }
            </div>
        </div>
    )
}

export default ExperienceDetails