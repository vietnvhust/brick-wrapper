import React from 'react';
import { Link } from 'react-router-dom';
import {MenuItemProps} from "../Header";
function MenuItem({href, text}:MenuItemProps) {
    return (
        <div className="link-menu">
            <Link to={href}>{text}</Link>
        </div>
    );
}

export default MenuItem;