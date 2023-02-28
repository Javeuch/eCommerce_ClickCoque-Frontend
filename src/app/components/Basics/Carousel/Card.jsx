import React from "react";
import { useState } from "react/cjs/react.development";
import { initalState } from "./dataCarousel";

function Card({ prop }) {

    return (
        <div className="relative flex flex-grow justify-center text-lg sm:text-7xl p-10 items-center">
            <div className="flex w-auto h-28 object-contain grayscale brightness-0 ">
                <img className="object-contain" src={prop}></img>
            </div>
        </div>
    );
}

export default Card;