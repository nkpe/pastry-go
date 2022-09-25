import React, { useState } from 'react';
import "./GameBoard.css";
import PlayerIcons from "../game/PlayerIcons";
import GameCardsDeck from './GameCards';
function GameCardPlaceholder() {
    return (
        <div className="game-card-placeholder"></div>
    )
}

function BoardSquare({id}: any) {
    return (
        <div id={id} className="board-game-square">
            <h2>{id}</h2>
        </div>
    )
}

export default function GameBoard() {

    const generatePlayerId = () => {
        return 3;
    };

    const [playerId, setPlayerId] = useState(generatePlayerId());
    const [playerPosition, setPlayerPosition] = useState({x: 0, y: 0});

    let squares: any = [];

    const squareNumber = 32;
    for (let i=0; i<squareNumber; i++) {
        squares.push(<BoardSquare key={i} id={i+1}/>);
    }

    const playerMove = () => {
        if (playerPosition.x < (75*11) && playerPosition.y < (75*5)) {
            setPlayerPosition({x: playerPosition.x+75, y: 0});
        } else if (playerPosition.y < (75*5)) {
            setPlayerPosition({x:playerPosition.x, y: playerPosition.y+75});
        } else {
            setPlayerPosition({x:playerPosition.x - 75, y: playerPosition.y});
        }
    }

    console.log("MOVE PLAYER: " + playerPosition);

    return (
        <div id="game-board">
            <PlayerIcons playerId={playerId} playerPosition={playerPosition}/>
            {squares}
            <div id="game-inner">
                <GameCardPlaceholder />
                <GameCardPlaceholder />
                <GameCardPlaceholder />
                <GameCardPlaceholder />
            </div>
            <button onClick={playerMove}>Click Me!!</button>
            <div id="player-cards-wrapper">
                <GameCardsDeck />
            </div>
        </div>
    )
};