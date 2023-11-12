import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/user/home-page'
import CityPage from '../pages/user/city-page'
import StatePage from '../pages/user/state-page'
import NotFoundPage from '../pages/common/not-found-page'

const CustomRoutes = () => {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />} />
                        <Route path="city" element={<CityPage />} />
                        <Route path="state" element={<StatePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default CustomRoutes