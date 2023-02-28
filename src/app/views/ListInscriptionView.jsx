import React, { useEffect, useState } from 'react';
import ListInscription from '../shared/components/container/ListInscription';
import { getAllAccount } from './../api/backend/account';
import { Link} from 'react-router-dom';
import { URL_ACCOUNT } from '../shared/constants/urls/urlConstants';
import { desactivateOneAccount } from './../api/backend/account';

const ListInscriptionView = () => {
    const [users, setUsers] = useState([]); 

    
    const deleteOneUser = (id) => {
        console.log(id);
        desactivateOneAccount(id)
            .then((res) => {
                if (res.status === 200) {
                    alert('Ce Compte a été désactivé!');       
                }
            })
    };


    useEffect(() => {
        getAllAccount()
            .then((response) => {
            const dataBackEnd =response.data; 
            const users=dataBackEnd.map((d)  => {
                return {
                    name: <Name user={d} />,
                    address: <Address user={d} />,
                    birthDate: <BirthDate user={d} />,
                    telephone: <Telephone user={d} />,
                    email: <Email user={d} />,
                    status: <Active isActive={d.isActive} />,
                    role: d.role.label,
                    edit: <EditBtn />,
                    delete: <DeleteBtn deleteOneUser={deleteOneUser} user={d} />,
            }});
            console.log(dataBackEnd);
                setUsers(users)   
            });
    }, []);

  
    return (
        <div className="mt-10">
            <ListInscription
                data={{
                    column: [
                        { name: 'Nom et prénom' },
                        { name: 'Adresse' },
                        { name: 'Date de naissance' },
                        { name: 'Téléphone' },
                        { name: 'Email' },
                        { name: 'Status' },
                        { name: 'Role' },
                        { name: '' },
                        { name: '' },
                    ],
                    rows: users,
                }}
            />
        </div>
    );
};

export default ListInscriptionView;

const Name = ({user}) => {
    return (
        <div className="flex items-center">
            <div className='flex-shrink-0 h-10 w-10'>
            <img className="h-10 w-10 rounded-full" src={user.image} alt="" />
            </div>
            <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                    {user.firstName}
                </div>
                <div className="text-sm text-gray-500">{user.lastName}</div>
            </div>
        </div>
    );
};

const Address = ({ user }) => {
    return (
        <>
            <div className="text-sm text-gray-900">{user.address.number}</div>
            <div className="text-sm text-gray-900">{user.address.street}</div>
            <div className="text-sm text-gray-900">{user.address.zipcode}</div>
            <div className="text-sm text-gray-900">{user.address.city}</div>
            <div className="text-sm text-gray-900">{user.address.country}</div>
        </>
    );
};

const BirthDate = ({ user }) => {
    return (
        <>
            <div className="text-sm text-gray-900">{user.birthDate}</div>
        </>
    );
};

const Telephone = ({ user }) => {
    return (
        <>
            <div className="text-sm text-gray-900">{user.phoneNumber}</div>
        </>
    );
};

const Email = ({ user }) => {
    return (
        <>
            <div className="text-sm text-red-900">{user.email}</div>
        </>
    );
};

const Active = ({ isActive }) => {
    return (
        <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
			${isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        >
            {isActive ? 'Active' : 'Inactive'}
        </span>
    );
};


const EditBtn = () => {
    return (
        <Link to= {URL_ACCOUNT}>
        <button type="button" className="btn-link-primary">
            Editer
        </button>
        </Link>
    );
};


const DeleteBtn = ({deleteOneUser, user}) => {
    console.log(user);
    return (
        <button type="button" className="btn-link-primary" onClick={() => deleteOneUser(user.id)}>
            Supprimer
        </button>
    );
};

