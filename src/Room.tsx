import React from "react";
import { useSearchParams } from "react-router-dom";

function Room() {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.toString());
    return (
        <div>
            Room with id: {searchParams.toString()}
        </div>
    )
}

export default Room;