import React from 'react';

const Nav = ({url, icon}) => {
    return <a href={url}><span>{icon}</span></a> 
}

export default Nav;
