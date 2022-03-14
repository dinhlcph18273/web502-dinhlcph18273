import React from "react";
import { Product } from "../types/product";

type ShowInforProps = {
    person: Product
}

const ShowInfor = (props: ShowInforProps) => {
    console.log(props);
    return (
        <h1>ShowInfor</h1>
    )
}

export default ShowInfor;