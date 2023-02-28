
import React from 'react';
import ListUsersAddBtn from './ListUsersAddBtn';

/* eslint-disable no-unused-vars */
const ListInscription = ({ data: { column, rows } }) => {
    return (
        <div className="flex flex-col bg-gray-100">

            <div className='text-center'>
            <p className='text-center text-6xl mt-8 mb-8'> ~ Liste des utilisateurs ~</p>
            <ListUsersAddBtn />
            </div>
            
            <div className="overflow-x-auto mb-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <THeader column={column} />
                            <TBody rows={rows} />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListInscription;

const THeader = ({ column }) => {
    return (
        <thead className="bg-gray-200">
            <tr>
                {column.map((data, index) => (
                    <Th data={data} key={index} />
                ))}
            </tr>
        </thead>
    );
};

const Th = ({ data }) => {
    return (
        <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
            {data.name}
        </th>
    );
};

const TBody = ({ rows }) => {
    console.log(rows)
    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, index) => (
                <TRow row={row} key={index} />
            ))}
        </tbody>
    );
};

const TRow = ({ row }) => {
    return (
        <tr>
            {Object.keys(row).map((data, index) => (
                <Td data={row[data]} key={index} />
            ))}
        </tr>
    );
};

const Td = ({ data }) => {
    return <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data}</td>;
};


