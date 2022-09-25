import React from 'react';

import { GameCardComp, croissantCard, birthdayCakeCard, pretzelCard, cherryPieCard} from '../game-board/GameCards';
import { Player1Deck } from '../game-board/GameCards';
import "./PlayerHand.css";

export function PlayerHand() {
    return (
        <div id="player-cards-wrapper">
            <div id="playerHand">
                <Player1Deck />
            </div>
            <div id="playerCurrentCards" >
                <h2>Current Cards</h2>
            </div>
            <div id="playerSelection">
                <h2>Player Selection</h2>
            </div>
        </div>
    )
}0