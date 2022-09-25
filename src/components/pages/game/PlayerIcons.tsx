import React, { useState } from 'react';
import CSS from 'csstype';

export default function PlayerIcons (props: any) {
    // get the style

    const styling: CSS.Properties = {
        height: '30px',
        width: '30px',
        borderRadius: "50%",
        backgroundColor:"red",
        position: 'absolute',
        transform: `translate(${props.playerPosition.x}px, ${props.playerPosition.y}px)`
    };

    return (
        <div id={props.playerId} style={styling}>
        </div>
    )
}