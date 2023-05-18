import tempImg from '../logo.svg'

function Projects() {
    return (
        <div className="form-group px-4 text-center">
            <h1 className="text-light ">Check out # projects</h1>
            <div className="row gx-5">
                <div className='col'>
                    <Project></Project>
                    <Project></Project>
                    <Project></Project>
                    
                </div>
                <div className='col'>
                    <Project></Project>
                    <Project></Project>
                    <Project></Project>
                    <Project></Project>
                </div>
                    
                
            </div>
        </div>
    )
}


function Project() {
    return (
        <div className="border rounded border-warning mb-3 pb-4 text-center bg-primary">
            <img src={ tempImg } className='img-thumbnail w-`100'></img>
            <div>Personal Project</div>
            <div>Description</div>
            <div>link</div>
            <div>date</div>
            <div>
                <div>skills</div>
            </div>
        </div>
    )
}

export default Projects