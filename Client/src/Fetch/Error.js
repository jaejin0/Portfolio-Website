import './ErrorStyle.css'

function Error(props) {
    return (
        <div className='content'>
            <div className='box'>
                <div className='message'>You received an error!</div>
                <div className='error'>message: { props.err }</div>
            </div>
        </div>
    )
}

export default Error