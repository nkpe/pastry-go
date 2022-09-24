import React, { useState } from "react";

import { Link } from "react-router-dom";


function Home(props: any) {
    return (
        <div>
            <Link to={props.roomNumber} onClick={props.generateRoomId} > Generate rooms! :-D </Link>
        </div>
    );
}

export default Home;