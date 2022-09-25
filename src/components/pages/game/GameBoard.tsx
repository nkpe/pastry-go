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

    const [playerPosition, setPlayerPosition] = useState({x: 0, y: 0});
    const [playerTwoPosition, setPlayerTwoPosition] = useState({x: 30, y: 0});

    let squares: any = [];

    let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 32, 13, 31, 14, 30, 15, 29, 16, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17];
    for (let i=0; i<numbers.length; i++) {
        squares.push(<BoardSquare key={i} id={numbers[i]}/>);
    }

    const playerOnePosFac = 75; 
    const playerOneMove = () => {
        if (playerPosition.x < (playerOnePosFac*11) && playerPosition.y < (playerOnePosFac*5)) {
            setPlayerPosition({x: playerPosition.x+playerOnePosFac, y: 0});
        } else if (playerPosition.y < (playerOnePosFac*5)) {
            setPlayerPosition({x:playerPosition.x, y: playerPosition.y+playerOnePosFac});
        } else if (playerPosition.x > 0) {
            setPlayerPosition({x:playerPosition.x - playerOnePosFac, y: playerPosition.y});
        } else {
            setPlayerPosition({x:playerPosition.x, y: playerPosition.y-playerOnePosFac});
        }
    }

    const playerTwoPosFac = 75;
    const playerTwoMove = () => {
        if (playerTwoPosition.x < (playerTwoPosFac*11) && playerTwoPosition.y < (playerTwoPosFac*5)) {
            setPlayerTwoPosition({x: playerTwoPosition.x+playerTwoPosFac, y: 0});
        } else if (playerTwoPosition.y < (playerTwoPosFac*5)) {
            setPlayerTwoPosition({x:playerTwoPosition.x, y: playerTwoPosition.y+playerTwoPosFac});
        } else if (playerTwoPosition.x > 0) {
            setPlayerTwoPosition({x:playerTwoPosition.x - playerTwoPosFac, y: playerTwoPosition.y});
        } else {
            setPlayerTwoPosition({x:playerTwoPosition.x, y: playerTwoPosition.y-playerTwoPosFac});
        }
    }

    console.log("MOVE PLAYER1: " + JSON.stringify(playerPosition));
    console.log("MOVE PLAYER2: " + JSON.stringify(playerTwoPosition));

    return (
        <div id="game-board">
            <PlayerIcons playerId={1} playerPosition={playerPosition} colour="red"/>
            <PlayerIcons playerId={2} playerPosition={playerTwoPosition} colour="blue"/>
        
            {squares}
            <div id="game-inner">
                <GameCardPlaceholder />
                <GameCardPlaceholder />
                <GameCardPlaceholder />
                <GameCardPlaceholder />
            </div>
            <button onClick={playerOneMove}>Move Player 1</button>
            <button onClick={playerTwoMove}>Move Player 2</button>
        </div>
    )
};