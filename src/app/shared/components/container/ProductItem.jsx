import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({
    id_product,
    photoProducts,
    average_notation,
    name,
    stock,
    taxe,
    price,
    description,
    brand,
}) {
    return (
        <Link to={'/product/' + id_product}>
            <div className="w-full">
                {/* image card */}
                <div
                    className="w-full bg-white align-middle justify-center mt-5
                btn shadow-[0_9px_0_rgb(84,86,91)] hover:shadow-[0_4px_0px_rgb(0,0,0)]
                text-black bg-white ease-out hover:translate-y-1 transition-all rounded"
                >
                    {photoProducts.map((photo) => (
                        <img
                            className="cardImg mx-auto rounded-t-lg sm:rounded-none "
                            key={photo.url_photo}
                            src={photo.url_photo}
                        />
                    ))}
                </div>

                {/* Text card */}
                <div
                    className="w-full flex flex-row bg-white sm:mt-4 rounded-b-lg sm:rounded-none
                btn shadow-[0_9px_0_rgb(84,86,91)] hover:shadow-[0_4px_0px_rgb(0,0,0)]
                text-black bg-white ease-out hover:translate-y-1 transition-all rounded"
                >
                    <div className="relatif w-full py-0">
                        <h5 className="mb-1 sm:mb-2 text-5xl md:text-xl font-bold tracking-tight text-black text-center whitespace-pre-wrap break-words">
                            {name}
                        </h5>

                        {/* Favori */}
                        <div className="cardFavori w-full flex flex-grow justify-end p-2 m-2">
                            <img
                                className="cardFavori m-0"
                                src="https://reussiralecole.fr/wp-content/uploads/2021/06/coloriage-coeur-8.jpg"
                                alt="ajout favori"
                            />
                        </div>

                        {/* Circle Color */}
                        <div className="w-full flex flex-row gap-2">
                            <div className="relative btn_card flex flex-row rounded-full bg-blue-700 hover:bg-blue-800"></div>
                            <div className="relative btn_card flex flex-row rounded-full bg-red-700 hover:bg-red-800"></div>
                            <p className="relative w-full flex flex-wrap justify-end text-3xl">
                                {price} €
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default ProductItem;
