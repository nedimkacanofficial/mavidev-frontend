import React, { useEffect, useState } from 'react';
import { getAllCities } from '../../api/city-service';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from '../../helpers/swal'
import { addState } from '../../api/state-service';
import Spinner from '../common/spinner/spinner';

const StateAddModal = ({ onAddState }) => {
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState([]);

    const openModal = () => {
        const modal = document.getElementById('state-add-crud-modal');
        modal.classList.remove('hidden');
        formik.resetForm();
    };

    const closeModal = () => {
        const modal = document.getElementById('state-add-crud-modal');
        modal.classList.add('hidden');
    };

    useEffect(() => {
        async function fetchCities() {
            try {
                const response = await getAllCities();
                setCities(response.data);
            } catch (error) {
                toast(error.response.data.message, "warning", 2000);
            }
        }

        fetchCities();
    }, []);

    const initialValues = {
        name: '',
        cityId: '',
    }

    const validationSchema = Yup.object({
        name: Yup.string().trim().required('Required!'),
        cityId: Yup.number().required('Required!'),
    })

    const onSubmit = async (values) => {
        try {
            const resp = await addState(values)
            toast(resp.data.name + " adding successful", "success", 2000);
            closeModal();
            onAddState();
        } catch (error) {
            toast(error.response.data.message, "warning", 2000);
        } finally {
            setLoading(false);
            formik.resetForm();
        }
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    useEffect(() => {
        closeModal();
    }, []);

    return (
        <>
            <button type="button" onClick={openModal} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm w-2/12 px-5 py-2.5 text-center mr-2 mb-3 mt-3 ml-5">ADD</button>
            <div
                id="state-add-crud-modal"
                tabIndex="-1"
                aria-hidden="true"
                className="hidden fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50"
            >
                <div className="relative p-4 w-full max-w-md mx-auto">
                    <div className="relative bg-white rounded-lg shadow-md dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Create New State
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="crud-modal"
                                onClick={closeModal}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
                                        placeholder="State name"
                                        {...formik.getFieldProps('name')}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                                    )}
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="cityId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                    <select
                                        id="cityId"
                                        name="cityId"
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${formik.touched.cityId && formik.errors.cityId ? 'border-red-500' : ''}`}
                                        value={formik.values.cityId || ""}
                                        onChange={formik.handleChange}
                                    >
                                        <option value="" disabled>Select city</option>
                                        {cities.map((city) => (
                                            <option key={city.id} value={city.id}>{city.name}</option>
                                        ))}
                                    </select>
                                    {formik.touched.cityId && formik.errors.cityId && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.cityId}</div>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={closeModal}
                                disabled={!(formik.dirty && formik.isValid) || loading}
                                type="submit"
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg
                                    className="me-1 -ms-1 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                {loading && <Spinner />}
                                Add new state
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StateAddModal;
