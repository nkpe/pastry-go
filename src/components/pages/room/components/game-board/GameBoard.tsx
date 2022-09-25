import React, { useState } from 'react';
import "./GameBoard.css";
import PlayerIcons from "./PlayerIcons";
import {GameCardPlaceholder, pretzelCard, cherryPieCard, birthdayCakeCard, croissantCard, GameCardComp} from './GameCards';

const playerOnePosFac = 75;
const playerOneMove = (playerPosition: any, setPlayerPosition: any) => {
    if (playerPosition.x < (playerOnePosFac * 11) && playerPosition.y < (playerOnePosFac * 5)) {
        setPlayerPosition({ x: playerPosition.x + playerOnePosFac, y: 0 });
    } else if (playerPosition.y < (playerOnePosFac * 5)) {
        setPlayerPosition({ x: playerPosition.x, y: playerPosition.y + playerOnePosFac });
    } else if (playerPosition.x > 0) {
        setPlayerPosition({ x: playerPosition.x - playerOnePosFac, y: playerPosition.y });
    } else {
        setPlayerPosition({ x: playerPosition.x, y: playerPosition.y - playerOnePosFac });
    }
}

function BoardSquare({ id }: any) {
    return (
        <div id={id} className="board-game-square">
            <h2>{id}</h2>
        </div>
    )
}

function GameInner() {

    return (
        <div id="game-inner">
            <GameCardPlaceholder card={croissantCard} />
            <GameCardPlaceholder card={birthdayCakeCard} />
            <GameCardPlaceholder card={cherryPieCard} />
            <GameCardPlaceholder card={pretzelCard} />
        </div>
    )
}

export default function GameBoard() {

    const generatePlayerId = () => {
        return 3;
    };

    const [playerPosition, setPlayerPosition] = useState({x: 0, y: 0});
    const [playerTwoPosition, setPlayerTwoPosition] = useState({x: 30, y: 0});

    let squares: any = [];

    let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 32, 13, 31, 14, 30, 15, 29, 16, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17];
    for (let i=0; i<numbers.length; i++) {
        squares.push(<BoardSquare key={i} id={numbers[i]}/>);
    }


    // console.log("MOVE PLAYER1: " + JSON.stringify(playerPosition));
    // console.log("MOVE PLAYER2: " + JSON.stringify(playerTwoPosition));

    return (
        <div id="game-board">
            <PlayerIcons playerId={1} playerPosition={playerPosition} colour="red"/>
            <PlayerIcons playerId={2} playerPosition={playerTwoPosition} colour="blue"/>
            {squares}
            <GameInner />
            
        </div>
    )
};