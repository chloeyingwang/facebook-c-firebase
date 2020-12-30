import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';


function SidebarRow({ src, Icon, title }) {
    //You can pass in a component as a prop but you have to use the CAPITAL letter or it would not work!!
    //compoent must start with Capital case!
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            {/* if you pass in an icon only then we are going to render an Icon */}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow 