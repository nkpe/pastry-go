import React, { useState } from 'react';

import PlayerIcons from "../game/PlayerIcons";
function GameCardPlaceholder() {
    return (
        <div className="game-card-placeholder"></div>
    )
}

export default function GameBoard() {

    const generatePlayerId = () => {
        return 3;
    };

    const [playerId, setPlayerId] = useState(generatePlayerId());

    return (
        <div id="game-board">
            <div id="game-outer">
                <PlayerIcons playerId={playerId} />
                <div id="game-inner">
                    <GameCardPlaceholder />
                    <GameCardPlaceholder />
                    <GameCardPlaceholder />
                    <GameCardPlaceholder />
                </div>
            </div>
        </div>
    )
};