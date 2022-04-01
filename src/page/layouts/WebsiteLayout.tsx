import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from '../../component/Footer'

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>

            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default WebsiteLayout