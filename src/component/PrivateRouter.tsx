import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const user = JSON.parse(localStorage.getItem("user")).roles

    if (user != 0) {
        return <Navigate to="/login" />
    }
    return props.children
}

export default PrivateRouter