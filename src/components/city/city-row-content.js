import React from 'react'
import CityEditModal from './city-edit-modal'
import { deleteCity } from '../../api/city-service'
import { toast } from '../../helpers/swal'

const CityRowContent = ({ onCityField, onEditCity }) => {
    const { id, name } = onCityField
    const handleDelete = async () => {
        try {
            await deleteCity(id)
            toast("Success", "success", 2000);
            onEditCity();
        } catch (error) {
            toast(error.response.data.message, "warning", 2000);
        }
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-5 py-3 text-lg text-gray-900 whitespace-nowrap dark:text-white">
                {name}
            </th>
            <td className="px-5 py-3">
                <CityEditModal cityField={onCityField} editCity={onEditCity} />
            </td>
            <td className="px-5 py-3">
                <button onClick={handleDelete} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm w-full py-2.5 text-center mr-2 mb-2">DELETE</button>
            </td>
        </tr>
    )
}

export default CityRowContent