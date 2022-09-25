import React from "react";
import { useSearchParams } from "react-router-dom";
import './Room.css';

import GameBoard from "./components/game-board/GameBoard";
import { PlayerHand } from "./components/players-hand/PlayersHand";
import { Player1Deck } from "./components/game-board/GameCards";

function Room() {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.toString());
    return (
        <div id="room">
            <p>Current Room: {searchParams.toString()}</p>
            <div id="game-board-wrapper">
                <GameBoard />
            </div>
            <PlayerHand />
        </div>
    )
}

export default Room;