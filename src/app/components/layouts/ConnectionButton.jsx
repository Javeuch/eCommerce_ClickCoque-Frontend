import React from 'react'
import {Link} from 'react-router-dom'
import { URL_LOGIN } from "../../shared/constants/urls/urlConstants.js";
import { URL_REGISTER} from "../../shared/constants/urls/urlConstants.js";

const ConnectionButton = () => {
                return (
                    <div className="flex justify-center space-x-4">
                        <div className="flex-row ">
                            <Link to={URL_LOGIN}>
                                <button className="btn bg-yellow-500 h-10">
                                    Connexion
                                </button>
                            </Link>
                        </div>
                        <div className="flex-row">
                            <Link to={URL_REGISTER}>
                                <button className="btn bg-yellow-500 h-10">
                                    Inscription
                                </button>
                            </Link>
                        </div>
                    </div>
                );
        };

export default ConnectionButton;