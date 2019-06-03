import React from 'react';

const Nav = ({url, icon}) => {
    return <a href={url}><i class={icon}></i></a> 
}

export default Nav;
