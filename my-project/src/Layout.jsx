import Header from './COMPONENTS/Header/Header'
import Footer from './COMPONENTS/Footer/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout