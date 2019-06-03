import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({url, icon}) => {
    return <a href={url}><span>{icon}</span></a> 
}

Nav.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
}

export default Nav;
