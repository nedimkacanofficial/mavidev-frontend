import React from 'react'
import { useEffect, useState } from 'react';
import { getAllStates } from '../../api/state-service';
import StateRowContent from './state-row-content';
import StateAddModal from './state-add-modal';
import { toast } from '../../helpers/swal';


const StateContent = () => {
    const [states, setStates] = useState([]);

    const loadData = async () => {
        try {
            const resp = await getAllStates();
            setStates(resp.data);
        } catch (err) {
            toast(err.response.data.message, "warning", 2000);
        }
    };

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div className="relative overflow-x-auto">
            <StateAddModal onAddState={loadData} />
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-5 py-3 text-lg w-4/12">
                            STATE NAME
                        </th>
                        <th scope="col" className="px-5 py-3 text-lg w-4/12">
                            CITY NAME
                        </th>
                        <th scope="col" className="px-5 py-3 text-lg w-2/12">
                            EDIT
                        </th>
                        <th scope="col" className="px-5 py-3 text-lg w-2/12">
                            DELETE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {states.map((state) => (
                        <StateRowContent key={state.id} onStateField={state} onEditState={loadData} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StateContent