import React from 'react'
import '../Header/index.scss'
import { Routes, Route } from 'react-router-dom'
import Main from '../Pages/Main-weather/index'
import Gallery from '../Pages/Main-gallery/gallery'
import ErrorPage from '../Error'

import Layout from '../../router/Layout'

const Header: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/Gallery" element={<Gallery />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default Header
