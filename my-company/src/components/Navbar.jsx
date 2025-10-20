import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '10px',
    backgroundColor: '#007bff',
    display: 'flex',
    justifyContent: 'space-around'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;