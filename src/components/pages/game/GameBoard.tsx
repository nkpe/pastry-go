import React, { useState } from 'react';
import "./GameBoard.css";
import PlayerIcons from "../game/PlayerIcons";
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

    let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 32, 13, 31, 14, 30, 15, 29, 16, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17];
    for (let i=0; i<numbers.length; i++) {
        squares.push(<BoardSquare key={i} id={numbers[i]}/>);
    }

    const playerMove = () => {
        if (playerPosition.x < (75*11) && playerPosition.y < (75*5)) {
            setPlayerPosition({x: playerPosition.x+75, y: 0});
        } else if (playerPosition.y < (75*5)) {
            setPlayerPosition({x:playerPosition.x, y: playerPosition.y+75});
        } else if (playerPosition.x > 0) {
            setPlayerPosition({x:playerPosition.x - 75, y: playerPosition.y});
        } else {
            setPlayerPosition({x:playerPosition.x, y: playerPosition.y-75});
        }
    }

    console.log("MOVE PLAYER: " + JSON.stringify(playerPosition));

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
        </div>
    )
};