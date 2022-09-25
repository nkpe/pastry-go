import React from "react";
import { useSearchParams } from "react-router-dom";
import './Room.css';

import GameBoard from "../game/GameBoard";

function Room() {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.toString());
    return (
        <div id="room">
            <p>Room with id: {searchParams.toString()}</p>
            <GameBoard />
            
        </div>
    )
}

export default Room;