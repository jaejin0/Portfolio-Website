import useFetch from '../Fetch/useFetch'
import { Link } from 'react-router-dom'

import Pending from '../Fetch/Pending'
import Error from '../Fetch/Error'

function Experiences() {

    const { data, isPending, error } = useFetch('/api/experiences')

    return (
        <div>
            { isPending && <Pending/> }
            { error && <Error err={ error }/>}
            { data && <ExperiencesContent data={ data }/>}
        </div>
    )
}

function ExperiencesContent(props) {

    const experiences = props.data

    const experiencesSkills = new Map()
    for (let i = 0; i < experiences.length; i++) {
        const skills = []
        for (let j = 0; j < experiences[i].skills.length; j++) {
            skills.push(
                <ul>{ experiences[i].skills[j] }</ul>
            )
        }
        experiencesSkills.set(experiences[i]._id, skills)
    }

    return (
        <div>
            {experiences.map((exp) => (
                <div key={exp._id}>
                    <Link to={`/experiences/${exp._id}`}>
                        <img src={ exp.mainImage } className='img-thumbnail w-`100'></img>
                        <div>{ exp.header }</div>
                        <div>{ exp.desc }</div>
                        <div>{ exp.company }</div>
                        <div>{ exp.title }</div>
                        <div>{ exp.date.start }</div>
                        <div>{ exp.date.end }</div>
                        <div>
                            <div>{ experiencesSkills.get(exp._id) }</div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Experiences