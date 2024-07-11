import notFound from '../assets/images/404-not-found.svg';
import { Link } from 'react-router-dom';
// import './NotFound.css';  // Import the CSS file

const NotFound = () => {
    return (
        <div className="not-found-container">
            <img draggable="false" className="not-found-image" src={notFound} alt="Page Not Found" />
            <Link to="/" className="not-found-link">Back To Home</Link>
        </div>
    );
};

export default NotFound;
