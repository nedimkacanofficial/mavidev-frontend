import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateCity } from '../../api/city-service';
import { toast } from '../../helpers/swal';
import Spinner from '../common/spinner/spinner';

const CityEditModal = ({ cityField, editCity }) => {
    const [loading, setLoading] = useState(false);

    const openModal = () => {
        const modal = document.getElementById('city-edit-crud-modal');
        modal.classList.remove('hidden');
    };

    const closeModal = () => {
        const modal = document.getElementById('city-edit-crud-modal');
        modal.classList.add('hidden');
    };

    const initialValues = {
        name: cityField.name
    }

    const validationSchema = Yup.object({
        name: Yup.string().trim().required('Required!'),
    });

    const onSubmit = async (values) => {
        try {
            const resp = await updateCity(cityField.id, values);
            toast(resp.data.name + ' update success', 'success', 2000);
            closeModal();
            editCity();
        } catch (error) {
            toast(error.response.data.message, 'warning', 2000);
        } finally {
            setLoading(false);
            formik.resetForm();
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        enableReinitialize: true,
    });

    useEffect(() => {
        closeModal();
    }, []);



    return (
        <>
            <button
                type="button"
                onClick={openModal}
                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm w-full py-2.5 text-center mr-2 mb-2"
            >
                EDIT
            </button>
            <div
                id="city-edit-crud-modal"
                tabIndex="-1"
                aria-hidden="true"
                className="hidden fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50"
            >
                <div className="relative p-4 w-full max-w-md mx-auto">
                    <div className="relative bg-white rounded-lg shadow-md dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Edit City
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
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        {...formik.getFieldProps('name')}
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${formik.touched.editName && formik.errors.editName ? 'border-red-500' : ''
                                            }`}
                                        placeholder="City name"
                                    />
                                    {formik.touched.editName && formik.errors.editName && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.editName}</div>
                                    )}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                {loading && <Spinner />}
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
                                Update City
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CityEditModal;
