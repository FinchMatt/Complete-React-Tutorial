import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1><span className="fullname">Matthew M. Finch</span><br/><span className="career">Aspiring Frontend Engineer</span></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Post</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;