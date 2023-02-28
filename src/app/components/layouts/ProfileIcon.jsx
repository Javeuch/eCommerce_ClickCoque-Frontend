import React from 'react';
import { Link } from 'react-router-dom';
const ProfileIcon = () => {
        return (
            <div className="-mb-3">
                <Link to="/myAccount">
                    <div className="overflow-hidden relative w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg
                            className="absolute -left-1 w-10 h-10 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </Link>
            </div>
        );
}

export default ProfileIcon;