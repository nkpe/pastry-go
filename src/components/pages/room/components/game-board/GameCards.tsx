import React from 'react';
import croissantImg from '../../../../../imgs/cards/croissant-512x512.png';
import bdayCakeImg from '../../../../../imgs/cards/birthday-cake-512x512.png';
import cherryPieImg from '../../../../../imgs/cards/cherry-pie-512x512.png';
import pretzelImg from '../../../../../imgs/cards/pretzel-512x512.png';
import { Http2ServerRequest } from 'http2';

export class GameCard {
    name: string;
    value: number;
    imageSrc: string;

    constructor(name: string, value: number, imageSrc: string) {
        this.name = name;
        this.value = value;
        this.imageSrc = imageSrc
    }
}

export const croissantCard: GameCard = {
    name: "croissant",
    value: 1,
    imageSrc: croissantImg,
}

export const birthdayCakeCard: GameCard = {
    name: "birthday cake",
    value: 10,
    imageSrc: bdayCakeImg,
}

export const cherryPieCard: GameCard = {
    name: "cherry pie",
    value: 3,
    imageSrc: cherryPieImg
}

export const pretzelCard: GameCard = {
    name: "pretzel",
    value: 4,
    imageSrc: pretzelImg,
}

//Components Start

export function createGameCardDeck() {
    let cardsDeck: GameCard[] = [];

    for (let i = 0; i < 10; i++) {
        cardsDeck.push(croissantCard);
    }

    for (let i = 0; i < 2; i++) {
        cardsDeck.push(birthdayCakeCard);
    }

    for (let i = 0; i < 5; i++) {
        cardsDeck.push(cherryPieCard);
    }

    for (let i = 0; i < 3; i++) {
        cardsDeck.push(pretzelCard);
    }

    // cardsDeck is array of card classes
    return cardsDeck;
}


let shuffled = function cardDeckShuffle() {
    let deck = createGameCardDeck();

    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    //deck is shuffled array of card classes
    return deck;
}


export function GameCardComp({cardId, imageSrc, value, name}: any) {
    // console.log("Game Card Comp " + JSON.stringify(gameCard));
    // console.log("Game Card Img Src" , gameCard.imageSrc);
    return (
        <div className='game-card' id={cardId}>
            <img src={imageSrc} />
            <h2>{name}</h2><p>{value}</p>
        </div>
    )
}

let card;

export function Player1Deck() {
    let shuffledDeck = shuffled();

    let player1CardsDeck = shuffledDeck.splice(0, 4);

    let player1Comp: any = [];
    let element;
    for (let i = 0; i < player1CardsDeck.length; i++) {
        player1Comp.push(player1CardsDeck[i]);
    }

    console.log(player1Comp);
    console.log(player1Comp[0]);

    return (
        <>
            {player1Comp.map((card: any) => (
                <GameCardPlaceholder card={card}/>
            ))}
        </>
    )
}

export function GameCardPlaceholder({ card }: any) {
    return (
        <div className="game-card-placeholder">
            <GameCardComp cardId={"10" + card.name} imageSrc={card.imageSrc} value={card.value} name={card.name} />
        </div>
    )
}



