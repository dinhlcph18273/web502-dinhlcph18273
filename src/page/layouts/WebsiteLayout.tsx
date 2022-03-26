import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from '../../component/Footer'
import Header from '../../component/Header'

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default WebsiteLayout