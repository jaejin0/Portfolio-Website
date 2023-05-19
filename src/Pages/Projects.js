// projects and hackathon
// 310 db project, first personal website project, memory game, acc project, 2 hackathon projects

import tempImg from '../logo.svg'
import { Link } from 'react-router-dom'

function Projects(props) {
    // props is a list of JSON that contains all projects

    const projList = [
        { id: 1, name: "proj1", subhead: "My First Project!", image: {tempImg}, desc: "description", date:"05/15/2023 - 05/30/2023", link: "Here is the link to the github", skills: "skill1 skill2 skill3"}
    ]

    return (
        <div>
            <div>
                Here are my { projList.length } projects
            </div>
            <div>
                {projList.map((proj) => (
                    <div key={proj.id}>
                        <Link to={`/projects/${proj.id}`}>
                            <img src={ proj.image } className='img-thumbnail w-`100'></img>
                            <div>{ proj.name }</div>
                            <div>{ proj.subhead }</div>
                            <div>{ proj.desc }</div>
                            <div>{ proj.link }</div>
                            <div>{ proj.date }</div>
                            <div>
                                <div>{ proj.skills}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects