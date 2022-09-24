import React, { useState } from "react";

import { Link } from "react-router-dom";


function generateRoomId() {
    return 1;
}

function generateRoomUrl() {
    return `room?code=${generateRoomId()}`;
}

function Home(props: any) {
    
    return (
        <div>
            <Link to={generateRoomUrl()}> Generate rooms! :-D </Link>
        </div>
    );
}

export default Home;