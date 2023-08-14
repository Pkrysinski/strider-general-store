import { useParams } from "react-router-dom";
import React from 'react';

function Customer() {

    const { id } = useParams();

    return (
        <p>This is a test {id}</p>
    );
}


export default Customer;