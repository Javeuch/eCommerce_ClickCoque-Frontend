import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="bg-gray-100 my-10 w-full h-full p-10">
                <div className="bg-white w-full h-full rounded-lg p-5">
                    {/* Best Page */}
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        {/* Partie Gauche */}
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-5">
                                    Une question ?
                                </h3>
                                {/* Aide en ligne */}
                                <div className="bg-orange-100 w-full h-full rounded-lg grid row justify-center items-center">
                                    <div className="flex justify-center items-center pt-5">
                                        <svg
                                            className="w-12 h-12"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <p className="mt-2 text-sm text-center text-gray-600">
                                        La réponse se trouve probablement dans notre FOIRE
                                        AUX QUESTIONS.
                                    </p>
                                    <button
                                        type="button"
                                        className="bg-yellow-500 py-3 px-5 my-3 mx-10 rounded-md shadow-sm text-sm leading-4 font-medium text-white hover:bg-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
                                    >
                                        Consulter l'aide en ligne
                                    </button>
                                </div>

                                {/* Contact du magasin */}
                                <div className="bg-orange-100 w-full h-full rounded-lg grid row justify-center items-center mt-5">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900 my-3">
                                        Contacter un magasin
                                    </h3>
                                    <button
                                        type="button"
                                        className="bg-yellow-500 py-3 px-5 mb-3 rounded-md shadow-sm text-sm leading-4 font-medium text-white hover:bg-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
                                    >
                                        Trouver votre magasin
                                    </button>
                                </div>

                                {/* Aide en ligne */}
                                <div className="bg-orange-100 w-full h-full rounded-lg grid row justify-center items-center mt-5">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900 my-3 text-center">
                                        Contacter le Service Clients
                                    </h3>
                                    <div className="flex justify-center gap-1">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            ></path>
                                        </svg>
                                        <p className="uppercase text-sm font-normal items-center text-center">
                                            par e-mail
                                        </p>
                                    </div>
                                    <p className="mt-2 text-xs text-center text-gray-600 px-2">
                                        Nous vous répondrons dans les plus bref délais
                                    </p>
                                    <button
                                        type="button"
                                        className="bg-yellow-500 py-3 px-5 my-3 rounded-md shadow-sm text-sm leading-4 font-medium text-white hover:bg-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
                                    >
                                        Consulter l'aide en ligne
                                    </button>
                                    <hr className="w-full h-full hrContact justify-center"></hr>
                                    <div className="flex justify-center gap-1 mt-2">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            ></path>
                                        </svg>
                                        <p className="uppercase text-sm font-normal items-center text-center align-middle">
                                            par courrier
                                        </p>
                                    </div>
                                    <p className="text-sm font-normal text-center my-2 italic">
                                        Intersport Service Clients <br></br> 2 rue Victor
                                        Hugo <br></br>
                                        91160 Longjumeau
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Partie Droite */}
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900 ml-5">
                                        Formulaire de contact :
                                    </h3>
                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <p>
                                            Faites-nous part de votre demande. <br></br>
                                            L'équipe Service Relation Client sera ravie de
                                            vous aider.
                                        </p>
                                        {/* Objet de la demande */}
                                        <div className="">
                                            <label
                                                htmlFor="objects"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Objets de votre demande :
                                            </label>
                                            <select
                                                id="objects"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                                            >
                                                <option
                                                    value="BASE"
                                                    disabled
                                                    selected
                                                    className="text-gray-400 text-opacity-50"
                                                >
                                                    Choisissez votre option
                                                </option>
                                                <option value="FE">Fethi</option>
                                                <option value="MA">Maxime</option>
                                                <option value="BU">bug</option>
                                                <option value="AU">Autre(s)</option>
                                            </select>
                                        </div>

                                        {/* Renseignements */}
                                        <div className="grid md:grid-cols-2 md:gap-6">
                                            <div className="relative z-0 mb-6 w-full group">
                                                <input
                                                    type="text"
                                                    name="floating_first_name"
                                                    id="floating_first_name"
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                                                    placeholder=" "
                                                    required
                                                />
                                                <label
                                                    htmlFor="floating_first_name"
                                                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                >
                                                    Prénom
                                                </label>
                                            </div>
                                            <div className="relative z-0 mb-6 w-full group">
                                                <input
                                                    type="text"
                                                    name="floating_last_name"
                                                    id="floating_last_name"
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                                                    placeholder=" "
                                                    required
                                                />
                                                <label
                                                    htmlFor="floating_last_name"
                                                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                >
                                                    Nom
                                                </label>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 md:gap-6">
                                            <div className="relative z-0 mb-6 w-full group">
                                                <input
                                                    type="tel"
                                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                    name="floating_phone"
                                                    id="floating_phone"
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                                                    placeholder=" "
                                                    required
                                                />
                                                <label
                                                    htmlFor="floating_phone"
                                                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                >
                                                    Numero de téléphone (+33 00 00 00 00)
                                                </label>
                                            </div>
                                            <div className="relative z-0 mb-6 w-full group">
                                                <input
                                                    type="text"
                                                    name="floating_company"
                                                    id="floating_company"
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                                                    placeholder=" "
                                                    required
                                                />
                                                <label
                                                    htmlFor="floating_company"
                                                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                >
                                                    Compagnie (Ex. Google)
                                                </label>
                                            </div>
                                        </div>

                                        {/* Probleme */}
                                        <div>
                                            <label
                                                htmlFor="about"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Détailler votre problème :
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={3}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                    placeholder="Exemple :  Fixons ` ∈ {0, . . . , n − 1} un entier et f : Z/nZ → Z/2Z tel que f (x) = 0 pour tout x, sauf f (`) = 1..."
                                                />
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Bref description de votre soucis en gros.
                                            </p>
                                        </div>

                                        {/* Upload de screen */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Pièce(s) jointe(s)
                                            </label>
                                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer bg-white rounded-md font-medium text-yellow-500 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                        >
                                                            <span>
                                                                Choisir un fichier
                                                            </span>
                                                            <input
                                                                id="file-upload"
                                                                name="file-upload"
                                                                type="file"
                                                                className="sr-only"
                                                            />
                                                        </label>
                                                        <p className="pl-1">
                                                            ou glisser - déposer ici
                                                        </p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                        PNG, JPG, GIF jusqu'à 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 text-center sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                                        >
                                            Sauvegarder
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
