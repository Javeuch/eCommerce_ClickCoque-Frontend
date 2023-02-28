import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import a52s from '../../../api/backend/data/photos-max/a52s.jpg';

class CGU extends Component {
    render() {
        return (
            <div className="bg-gray-100 my-10 w-full h-full p-10">
                <div className="bg-white w-full h-full rounded-lg">
                    <h2 className="uppercase py-5 font-extrabold text-center">
                        Conditions générales d’utilisation
                    </h2>
                    <br></br>
                    <Link to="/" className="px-10 text-blue-500 font-bold">
                        www.lacoquefrancaise.com
                    </Link>
                    <p className="m-10">
                        Les présentes conditions d’utilisation sont conclues entre tout
                        internaute naviguant, ou ayant accès aux fonctionnalités du Site{' '}
                        <i>(ci-après dénommé « Internaute »)</i> et lacoquefrancaise.
                    </p>
                    <p className="m-10">
                        Le site www.lacoquefrancaise.com{' '}
                        <i>(ci-après dénommé le « Site » ou la « Marketplace ») </i> est
                        édité et exploité par la société lacoquefrancaise France, société
                        à actions simplifiée, à capital variable, immatriculée au RCS de
                        Lille Métropole sous le numéro 500 569 405 et dont le siège social
                        est situé 4 boulevard de Mons, 59650 VILLENEUVE D’ASCQ.
                    </p>
                    <p className="m-10">
                        La société lacoquefrancaise France appartient au « Groupe
                        lacoquefrancaise ». Celui-ci désigne la société lacoquefrancaise
                        SE et l’ensemble des sociétés détenues par celle-ci, directement
                        ou indirectement, à hauteur minimum de 10% du capital ou des
                        droits de vote{' '}
                        <i>
                            (ci-après dénommées « Filiales lacoquefrancaise » ou «
                            Sociétés du Groupe lacoquefrancaise »)
                        </i>
                        .
                    </p>
                    <p className="m-10">
                        Aux fins des présentes, le Client est une personne physique,
                        majeure effectuant un achat sur le Site en sa qualité de
                        consommateur.
                    </p>
                    <p className="m-10">
                        L’Utilisateur est défini comme le marchand professionnel
                        indépendant ayant souscrit au Service de la Marketplace.
                    </p>
                    <p className="m-10">
                        Les Produits proposés sur le Site sont des produits de sport, de
                        loisir et de bien être neufs.
                    </p>
                    <p className="m-10">
                        L’utilisation du Site implique impérativement l’acceptation des
                        CGU par l’Internaute sans réserve. Les présentes CGU sont
                        consultables à tout moment sur le Site et figurent en bas de page.
                        La version des CGU applicables est celle en vigueur au jour de la
                        navigation.
                    </p>
                    <a
                        className="w-full h-full m-10 flex flex-grow gap-5 items-center underline text-blue-500"
                        href={a52s}
                        download
                    >
                        Téléchargeable juste ici{' '}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-download animate-bounce"
                            viewBox="0 0 16 16"
                        >
                            {' '}
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />{' '}
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />{' '}
                        </svg>
                    </a>
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default CGU;
