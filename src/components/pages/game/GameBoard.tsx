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

    let squares: any = [];

    const squareNumber = 32;
    for (let i=0; i<squareNumber; i++) {
        squares.push(<BoardSquare key={i} id={i+1}/>);
    }
    let x = 0;
    let y = 0;
    const playerMove = () => {
        const currentPlayer: any = document.getElementById(playerId as any);
        currentPlayer.style.transform = `translate(${x * 75}px, ${y * 75}px)`;
        if (x < 11) {
            x++;
        } else {
            y++
        }
        
        console.log("click working")
    }

    return (
        <div id="game-board">
            <PlayerIcons playerId={playerId}/>
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