import React from 'react'
import { useEffect, useState } from 'react';
import { getAllCities } from '../../api/city-service';
import CityRowContent from './city-row-content';
import CityAddModal from './city-add-modal';
import { toast } from '../../helpers/swal';

const CityContent = () => {
    const [cities, setCities] = useState([]);

    const loadData = async () => {
        try {
            const resp = await getAllCities();
            setCities(resp.data);
        } catch (err) {
            toast(err.response.data.message, "warning", 2000);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="relative overflow-x-auto">
            <CityAddModal onAddCity={loadData} />
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-5 py-3 text-lg w-8/12">
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
                    {cities.map((city) => (
                        <CityRowContent key={city.id} onCityField={city} onEditCity={loadData} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CityContent