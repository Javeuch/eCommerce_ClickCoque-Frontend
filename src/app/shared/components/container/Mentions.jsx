import React, { Component } from 'react';
import a52s from '../../../api/backend/data/photos-max/a52s.jpg';

class Mentions extends Component {
    render() {
        function toggleTextContact() {
            var text = document.getElementById('Contact');

            if (text.style.display === 'none') {
                text.style.display = 'block';
            } else {
                text.style.display = 'none';
            }
        }

        function toggleTextHebergeur() {
            var text = document.getElementById('hebergeur');

            if (text.style.display === 'none') {
                text.style.display = 'block';
            } else {
                text.style.display = 'none';
            }
        }

        function toggleTextProtection() {
            var text = document.getElementById('protection');

            if (text.style.display === 'none') {
                text.style.display = 'block';
            } else {
                text.style.display = 'none';
            }
        }

        function toggleTextIntelectuelle() {
            var text = document.getElementById('intelectuelle');

            if (text.style.display === 'none') {
                text.style.display = 'block';
            } else {
                text.style.display = 'none';
            }
        }

        function toggleTextPrix() {
            var text = document.getElementById('prix');

            if (text.style.display === 'none') {
                text.style.display = 'block';
            } else {
                text.style.display = 'none';
            }
        }

        function toggleTextUtilisation() {
            var text = document.getElementById('utilisation');

            if (text.style.display === 'none') {
                text.style.display = 'block';
            } else {
                text.style.display = 'none';
            }
        }

        return (
            <div className="bg-gray-100 my-10 w-full h-full p-10">
                <div className="bg-white w-full h-full rounded-lg p-5">
                    <h1>Mentions l??gales</h1>
                    <br></br>
                    <p>
                        Le site www.lacoquefrancaise.com <i>(ci-apr??s le ???Site???)</i> est
                        ??dit?? par la soci??t?? lacoquefrancaise France, soci??t?? paractions
                        simplifi??e ?? capital variable, dont le si??ge social est situ?? sis
                        4, boulevard de Mons, 59650 Villeneuve d???Ascq et immatricul??e au
                        Registre du Commerce et des Soci??t??s de Lille M??tropole sousle
                        num??ro 500 569 405.
                    </p>
                    <br></br>
                    <div className="border-yellow-500 border-solid border-2 p-5 rounded-lg w-auto h-auto font-semibold">
                        <p>N?? TVA Intracommunautaire : FR11500569405</p>
                        <p>Num??ro de t??l??phone : ** ** ** ** **</p>
                        <p>Email : contacts@lacoquefrancaise.com</p>
                        <p>Directeur de la publication : Monsieur FETHIS leBoss</p>
                    </div>
                    <br></br>

                    {/* CONTACT */}
                    <div className="w-full h-full px-5">
                        <button
                            type="button"
                            onClick={toggleTextContact}
                            className="btn_home_cardList w-full h-auto text-left px-10 bg-yellow-500 text-lg text-black font-semibold flex gap-5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            CONTACT{' '}
                        </button>
                        <div
                            id="Contact"
                            className="w-full h-full pb-2 border-yellow-500 border-solid border-2 border-t-0 rounded-b-lg "
                        >
                            <p className="text-left px-5 py-3">
                                Le Centre Relation Clients de lacoquefrancaise.com est
                                joignable :<br></br>- Par internet : via le lien Contact
                                sur le site www.lacoquefrancaise.com
                                <br></br>- Par t??l??phone au **** *** ***{' '}
                                <i>
                                    (N?? Cristal, prix d'un appel local depuis un t??l??phone
                                    fixe)
                                </i>
                                , du lundi au samedi de 9h ?? 20h.
                                <br></br>- Par voie postale : lacoquefrancaise SAS ???
                                Service Relation Clients
                                <br></br>- 4 boulevard de Mons, 59650 Villeneuve d???Ascq
                            </p>
                        </div>
                    </div>

                    {/* H??BERGEUR */}
                    <div className="w-full h-full px-5 mt-5">
                        <button
                            type="button"
                            onClick={toggleTextHebergeur}
                            className="btn_home_cardList w-full h-auto text-left px-10 bg-yellow-500 text-lg text-black font-semibold flex gap-5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            H??BERGEUR{' '}
                        </button>
                        <div
                            id="hebergeur"
                            className="w-full h-full pb-2 border-yellow-500 border-solid border-2 border-t-0 rounded-b-lg"
                        >
                            <p className="text-left px-5 py-3">
                                Tour Europlaza 17??me ??tage
                                <br></br>20 avenue Andr?? Prothin
                                <br></br>92927 Paris La D??fense
                                <br></br>+33 * ** ** ** **
                            </p>
                        </div>
                    </div>

                    {/* PROTECTION DES DONN??ES PERSONNELLES */}
                    <div className="w-full h-full px-5 mt-5">
                        <button
                            type="button"
                            onClick={toggleTextProtection}
                            className="btn_home_cardList w-full h-auto text-left px-10 bg-yellow-500 text-lg text-black font-semibold flex gap-5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            PROTECTION DES DONN??ES PERSONNELLES{' '}
                        </button>
                        <div
                            id="protection"
                            className="w-full h-full pb-2 border-yellow-500 border-solid border-2 border-t-0 rounded-b-lg"
                        >
                            <p className="text-left px-5 py-3">
                                Pour consulter notre charte de protection de donn??es
                                personnelles,{' '}
                                <a href="/" className="text-blue-500">
                                    {' '}
                                    cliquez ici
                                </a>{' '}
                                .<br></br>
                                Pour consulter la politique Cookies de lacoquefrancaise,
                                <a href="/" className="text-blue-500">
                                    {' '}
                                    cliquez ici
                                </a>{' '}
                                .
                            </p>
                        </div>
                    </div>

                    {/* POPRIET?? INTELLECTUELLE */}
                    <div className="w-full h-full px-5 mt-5">
                        <button
                            type="button"
                            onClick={toggleTextIntelectuelle}
                            className="btn_home_cardList w-full h-auto text-left px-10 bg-yellow-500 text-lg text-black font-semibold flex gap-5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            POPRIET?? INTELLECTUELLE{' '}
                        </button>
                        <div
                            id="intelectuelle"
                            className="w-full h-full pb-2 border-yellow-500 border-solid border-2 border-t-0 rounded-b-lg"
                        >
                            <p className="text-left px-5 py-3">
                                Le Site est prot??g?? au titre de la propri??t??
                                intellectuelle, notamment droits d'auteurs, dessins
                                etmod??les, marques, noms de domaine, brevets,
                                savoir-faire, logiciels ou bases de donn??es. Legroupe
                                lacoquefrancaise SE <i>(Groupe lacoquefrancaise )</i>{' '}
                                et/ou ses partenaires reste<i>(nt)</i> propri??taire
                                <i>(s) </i>de l'ensemble de ces contenus et droits
                                associ??s.Sur ces contenus, Groupe lacoquefrancaise vous
                                accorde une licence limit??e, non-exclusive,r??vocable, sans
                                droit de sous-licencier pour les simples acc??s, navigation
                                et utilisation li??s aupr??sent Site. Cette licence ne vous
                                accorde aucun autre droit, en particulier
                                d'exploitationcommerciale de ces contenus
                            </p>
                        </div>
                    </div>

                    {/* NOS PRIX */}
                    <div className="w-full h-full px-5 mt-5">
                        <button
                            type="button"
                            onClick={toggleTextPrix}
                            className="btn_home_cardList w-full h-auto text-left px-10 bg-yellow-500 text-lg text-black font-semibold flex gap-5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            NOS PRIX{' '}
                        </button>
                        <div
                            id="prix"
                            className="w-full h-full pb-2 border-yellow-500 border-solid border-2 border-t-0 rounded-b-lg "
                        >
                            <p className="text-left px-5 py-3">
                                Le Site vous permet de prendre connaissance des prix des
                                produits pratiqu??s dans les magasins lacoquefrancaise
                                situ??s en France m??tropolitaine. Les prix affich??s sont
                                les prix d??finis par lacentrale d'achat de
                                lacoquefrancaise, il s'agit de prix maximum conseill??s,
                                ces prix peuvent doncvarier selon la politique commerciale
                                de chaque magasin lacoquefrancaise.Par ailleurs,
                                l'internaute est inform?? que les offres de produits et
                                prix propos??s ?? l'achat dans lesmagasins lacoquefrancaise
                                ne sont pas applicables aux achats en ligne sur le site
                                www.decathlon.fret inversement.
                            </p>
                        </div>
                    </div>

                    {/* UTILISATION DU SITE */}
                    <div className="w-full h-full px-5 mt-5">
                        <button
                            type="button"
                            onClick={toggleTextUtilisation}
                            className="btn_home_cardList w-full h-auto text-left px-10 bg-yellow-500 text-lg text-black font-semibold flex gap-5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            UTILISATION DU SITE{' '}
                        </button>
                        <div
                            id="utilisation"
                            className="w-full h-full pb-2 border-yellow-500 border-solid border-2 border-t-0 rounded-b-lg "
                        >
                            <p className="text-left px-5 py-3 flex">
                                L???utilisation du Site par l???Internaute doit se faire en
                                conformit?? avec les Conditions G??n??rales d???Utilisation du
                                Site accessibles via le lien &nbsp;{' '}
                                <a
                                    className="flex flex-wrap gap-2 items-center underline text-blue-500"
                                    href={a52s}
                                    download
                                >
                                    ICI{' '}
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
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mentions;
