import React, { useState } from "react";
import Card from "./Card";
import { initalState } from "./dataCarousel";

function Carousel() {
    const [cards, setCards] = useState(initalState);

    const handleLeftClick = (isLeft) => {
        const prevState = [...cards];
        const nextCardIdx = prevState
            .filter((ft) => ft.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;

        prevState.find((f) => f.active === false).active = true;
        prevState.find((f) => f.idx === nextCardIdx).active = false;
        prevState.find((f) => f.idx === nextCardIdx).pos =
            Math.max.apply(
                null,
                prevState.map(function (o) {
                    return o.pos;
                })
            ) + 1;

        setCards(prevState);
    };

    const handleRightClick = () => {
        const prevState = [...cards];
        const nextCardIdx = prevState
            .filter((ft) => ft.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
            .pop(1).idx;

        prevState.find((f) => f.active === false).pos =
            Math.min.apply(
                null,
                prevState.map(function (o) {
                    return o.pos;
                })
            ) - 1;

        prevState.find((f) => f.active === false).active = true;
        prevState.find((f) => f.idx === nextCardIdx).active = false;

        setCards(prevState);
    };

    return (
        <>
            {/* --------------- Click gauche -------------- */}
            <div
                className="text-xs sm:text-5xl cursor-pointer"
                onClick={() => handleRightClick()}
            >
                {"<"}
            </div>

            {/* --------------- Cards pub -------------- */}
            {cards
                .filter((f) => f.active === true)
                .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
                .map((card, index) => (
                    <Card key={index} prop={card.src} />
                ))

            }


            {/* --------------- Click droit -------------- */}
            <div
                className="text-xs sm:text-5xl cursor-pointer"
                onClick={() => handleLeftClick()}
            >
                {">"}
            </div>
        </>
    );
}

export default Carousel;