import React from 'react';
import headerLogo from "../../imgs/cards/croissant-512x512.png";

export default function Header () {
    return (
        <header>
            <div id="header-name">
                Pastry Go...
            </div>
            <div id="header-logo">
                <img src={headerLogo}/>
            </div>
        </header>
    )
};