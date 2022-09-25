import React, { useState } from 'react';

export default function PlayerIcons ({playerId, playerMove}: any) {
    // get the style



    return (
        <div id={playerId} className="player-icons" style={{transform: playerMove}}>
        </div>
    )
}