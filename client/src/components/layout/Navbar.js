import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


const Navbar = ({title, icon}) => {
    return (
        <div className='navbar'>
            <h1>
                {/* icon */}
                <i className={icon}/> {title}
            </h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/code'>Code</Link></li>
                <li><Link to='/photos'>Photos</Link></li>
                <li><Link to='/film'>Film</Link></li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title:'ANDY',
    icon: ''
}

export default Navbar