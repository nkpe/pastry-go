import React, { useState } from 'react';
import "./GameBoard.css";
import PlayerIcons from "../game/PlayerIcons";
import {GameCardsDeck, GameCardComp} from './GameCards';

import croissantImg from '../../../imgs/cards/croissant-512x512.png';
import bdayCakeImg from '../../../imgs/cards/birthday-cake-512x512.png';
import cherryPieImg from '../../../imgs/cards/cherry-pie-512x512.png';
import pretzelImg from '../../../imgs/cards/pretzel-512x512.png';

function GameCardPlaceholder({ card}: any) {

    return (
        <div className="game-card-placeholder">
            {card}
        </div>
    )
}

function BoardSquare({ id }: any) {
    return (
        <div id={id} className="board-game-square">
            <h2>{id}</h2>
        </div>
    )
}

function GameInner() {

    const croissant = <GameCardComp imageSrc={croissantImg} cardValue={1} cardId="1a" cardName="Croissant" />;
   
    const birthdayCake = <GameCardComp imageSrc={bdayCakeImg} cardValue={10} cardId="1b" cardName="Birthday Cake" />;
   
    const cherryPie = <GameCardComp imageSrc={cherryPieImg} cardValue={5} cardId="1c" cardName="Cherry Pie" />
    
    const pretzel = <GameCardComp imageSrc={pretzelImg} cardValue={3} cardId="1d" cardName="Pretzel" />
    
    return (
        <div id="game-inner">
            <GameCardPlaceholder card={croissant} />
            <GameCardPlaceholder card={birthdayCake} />
            <GameCardPlaceholder card={cherryPie} />
            <GameCardPlaceholder card={pretzel} />
        </div>
    )
}

export default function GameBoard() {

    const generatePlayerId = () => {
        return 3;
    };

    const [playerId, setPlayerId] = useState(generatePlayerId());
    const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

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
            <PlayerIcons playerId={playerId} playerPosition={playerPosition} />
            {squares}
            <GameInner />
            <button onClick={playerMove}>Click Me!!</button>
            <div id="player-cards-wrapper">
                <GameCardsDeck />
            </div>

        </div>
    )
};