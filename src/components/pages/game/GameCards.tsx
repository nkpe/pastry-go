import React from 'react';
import croissantImg from '../../../imgs/cards/croissant-512x512.png';
import bdayCakeImg from '../../../imgs/cards/birthday-cake-512x512.png';
import cherryPieImg from '../../../imgs/cards/cherry-pie-512x512.png';
import pretzelImg from '../../../imgs/cards/pretzel-512x512.png';

export function GameCardComp ({imageSrc, cardId, cardName, cardValue}: any) {  
    return (
        <div className='game-card' id={cardId}>
            <img src={imageSrc} />
            <h2>{cardName}</h2><p>{cardValue}</p>
        </div>
    )
}

export function GameCardsDeck () {
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
        let croissant = <GameCardComp imageSrc={croissantImg} cardValue={1} cardId={i+1} cardName="Croissant" />;
        // let croissant = new GameCard("Croissant", 1, 0, i+1, croissantImg );
        cardsDeckArray.push(croissant);
    };
    for (let i = 0; i < 2; i++) {
        let birthdayCake = <GameCardComp imageSrc={bdayCakeImg} cardValue={10} cardId={i+1} cardName="Birthday Cake" />;
        // let birthdayCake = new GameCard("Birthday Cake", 10, 0, i+1, bdayCakeImg);
        cardsDeckArray.push(birthdayCake);
    };
    for (let i = 0; i < 5; i++) {
        let cherryPie = <GameCardComp imageSrc={cherryPieImg} cardValue={5} cardId={i+1} cardName="Cherry Pie" />
        // let cherryPie = new GameCard("Cherry Pie", 5, 0, i+1, cherryPieImg );
        cardsDeckArray.push(cherryPie);
    };
    for (let i = 0; i < 3; i++) {
       let pretzel = <GameCardComp imageSrc={pretzelImg} cardValue={3} cardId={i+1} cardName="Pretzel" />
        // let pretzel = new GameCard("Pretzel", 3 0, i+1, pretzelImg);
        cardsDeckArray.push(pretzel);
    };
    
    console.log(cardsDeckArray);

    return (
        <>
            {cardsDeckArray}
        </>
    )
        
}


