import React, { Component } from 'react';

// Images
import imgCard01 from '../../../api/backend/data/photos-max/En_tete_page_propos.png';

class About extends Component {
    render() {
        return (
            <div className="w-full h-full bg-gray-100">
                <h1 className="text-center font-bold my-20">Qui somme-nous ?</h1>
                <img
                    className="w-full h-full justify-center p-5"
                    src={imgCard01}
                    alt="logo de l'application"
                />
                <h2 className="text-base font-bold text-center mb-5 px-10">
                    La touche française ou l’élégance tout simplement ! Marque française
                    créée en 2010, LaCoqueFrançaise puise son inspiration dans le sud de
                    la France à Marseille.
                </h2>
                <p className="text-center px-20 ">
                    Notre équipe de graphistes et illustrateurs, toujours à la pointe des
                    dérnières tendances, travaille sur des imprimés et illustrations
                    originales. Toutes les impressions sont réalisées dans notre atelier
                    et sont gages d’une qualité 100% Française.
                </p>
                <p className="text-center px-20 ">
                    Aujourd’hui nous avons décidé d’aller plus loin et de faire de votre
                    smartphone un véritable accessoire de mode, en alliant praticité et
                    tendance.
                </p>
                <br></br>
                <p className="text-center px-20 ">
                    Notre source d’inspiration, la femme libre et active. Car oui nos
                    chaînes bijoux permettront de faciliter l’utilisation de vos
                    smartphones et de gagner du temps.
                </p>
                <br></br>
                <p className="text-center px-20 ">
                    Notre plus, vous libérer de la plus belle des manières en s’adaptant à
                    votre style.
                </p>
                <br></br>
                <p className="text-center px-20 ">
                    Nos chaînes se déclinent dans de nombreuses couleurs et matériaux et
                    permettent de sublimer tous vos looks
                </p>
                <br></br>
            </div>
        );
    }
}

export default About;
