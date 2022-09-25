import React from 'react';
import croissantImg from '../../../imgs/cards/croissant-512x512.png';
import bdayCakeImg from '../../../imgs/cards/birthday-cake-512x512.png';
import cherryPieImg from '../../../imgs/cards/cherry-pie-512x512.png';
import pretzelImg from '../../../imgs/cards/pretzel-512x512.png';

export default function GameCardsDeck () {
    class GameCard {
        name: string;
        value: number;
        stateOfPlay: any;
        id: number;
        image: any;
    
        constructor(name: string, value: number, stateOfPlay: any, id: number, image: any) {
            this.name = name;
            this.value = value;
            this.stateOfPlay = stateOfPlay;
            this.id = id;
            this.image = image;
        }
    }
    
    let cardsDeckArray = [];
    for (let i = 0; i < 10; i++) {
        let croissant = new GameCard("Croissant", 1, 0, i+1, croissantImg );
        cardsDeckArray.push(croissant);
    };
    for (let i = 0; i < 2; i++) {
        let birthdayCake = new GameCard("Birthday Cake", 10, 0, i+1, bdayCakeImg);
        cardsDeckArray.push(birthdayCake);
    };
    for (let i = 0; i < 5; i++) {
        let cherryPie = new GameCard("Cherry Pie", 5, 0, i+1, cherryPieImg );
        cardsDeckArray.push(cherryPie);
    };
    for (let i = 0; i < 3; i++) {
        let pretzel = new GameCard("Pretzel", 3, 0, i+1, pretzelImg);
        cardsDeckArray.push(pretzel);
    };
    
    console.log(cardsDeckArray);

    return (
        <div className='game-card'>
        </div>
    )
}


