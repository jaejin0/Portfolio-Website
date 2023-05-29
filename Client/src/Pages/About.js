import useFetch from '../Fetch/useFetch'
import { NavLink } from 'react-router-dom'

import Pending from '../Fetch/Pending'
import Error from '../Fetch/Error'

function About(props) {

    const { data, isPending, error } = useFetch('/api/about')

    return (
        <div>
            { isPending && <Pending/> }
            { error && <Error err={ error }/>}
            { data && <AboutContent data={ data }/>}
        </div>
    )
}

function AboutContent(props) {

    const about = props.data

    const courseworks = []
    for (let i = 0; i < about.courseworks.length; i++) {
        courseworks.push(
            <ul>{ about.courseworks[i] }</ul>
        )
    }
    const languages = []
    for (let i = 0; i < about.languages.length; i++) {
        languages.push(
            <ul>{ about.languages[i] }</ul>
        )
    }
    const frameworks = []
    for (let i = 0; i < about.frameworks.length; i++) {
        frameworks.push(
            <ul>{ about.frameworks[i] }</ul>
        )
    }
    const tools = []
    for (let i = 0; i < about.tools.length; i++) {
        tools.push(
            <ul>{ about.tools[i] }</ul>
        )
    }
    const certificates = []
    for (let i = 0; i < about.certificates.length; i++) {
        certificates.push(
            <ul>{ about.certificates[i] }</ul>
        )
    }

    return (
        <div>
            <div className="row">
                <div className="col">{ about.image }</div>
                <div className="col">
                    <div>Jaejin Cha</div>
                    <div>
                        <div>
                            <h2>Education</h2>
                            <div>Texas A&M University '24</div>
                            <div>Bachelor of Science, Major in Computer Science, Minor in Mathematics</div>
                            <div>GPA: { about.gpa }</div>
                        </div>
                        <div>
                            <h4>Relavant Courseworks</h4>
                            <div>{ courseworks }</div>
                        </div>
                        <div>
                            <h3>Certificates</h3>
                            <div>{ certificates }</div>
                        </div>
                        <div>
                            <h3>Technical Skills</h3>
                            <div>{ languages }</div>
                            <div>{ frameworks }</div>
                            <div>{ tools }</div>
                        </div>
                    </div>
                    <NavLink className='btn btn-secondary active' target="_blank" to='/resume'>View Resume in PDF</NavLink>
                </div>
            </div>
        </div>
    )
}

export default About