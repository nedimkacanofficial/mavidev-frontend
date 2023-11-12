/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillLinkedin } from 'react-icons/ai'

const HomeImage = () => {
    return (
        <>
            <figure className="mx-auto md:mx-0 px-5 py-3 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <Link>
                    <img className="rounded-lg" src="https://avatars.githubusercontent.com/u/86536657?v=4" alt="image description" />
                </Link>
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Hello, I am Nedim. I made this application for Mavidev. Basically, I did the adding, updating, deleting and listing operations of the city and adding, updating and deleting the state.</figcaption>
                <Link to={"https://www.linkedin.com/in/nedimkacanofficial/"} target='blank' className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><AiFillLinkedin size={30} /> Read more</Link>
            </figure>
        </>
    )
}

export default HomeImage;
