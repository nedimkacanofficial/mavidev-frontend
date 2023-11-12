import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto' }} className="bg-gray-600 border-gray-200 dark:bg-gray-900">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
                <span className="text-sm text-white sm:text-center dark:text-white">© 2023 <Link to={"https://github.com/nedimkacanofficial"} target='_blank' rel='noopener noreferrer' className="hover:underline text-white">ndmkcn™</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
