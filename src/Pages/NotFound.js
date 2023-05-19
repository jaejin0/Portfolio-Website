import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <div>The Page is not Found</div>
            <Link to="/">Go Back to Home Page</Link>
        </div>
    )
}

export default NotFound