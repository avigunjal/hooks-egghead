import PropTypes from 'prop-types';
import './header.css';

function Header({title}) {
    return (
        <div class='container flex'>
            <h1 class='h1-title'>{title}</h1>
            <nav>
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutus">About</a></li>
            <li><a href="#conatct" class='active'>Get In Touch</a></li>
            </ul>
            </nav>
        </div>
    )
}

Header.defaultProps = {
title: 'Default Heading'
}

Header.propTypes = {
title: PropTypes.string
}

export default Header;