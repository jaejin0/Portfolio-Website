import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../useFetch'

function ProjectDetails() {
    const { id } = useParams()
    const { data, isPending, error } = useFetch('https://localhost:8000/projects' + id)
    const navigate = useNavigate()

    return (
        <div>
            { isPending && <div>loading...</div> }
            { error && <div>{ error }</div> }
            { data && (
                <article>
                    <button onClick={() => { navigate('/projects') }}>X</button>
                    <h2>detail</h2>
                </article>
            )}
        </div>
    )
}

export default ProjectDetails