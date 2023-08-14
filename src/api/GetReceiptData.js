import React, { useEffect, useState } from "react";

function GetReceiptData() {

    let requestOptions = {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    };

    let requestUrl = 'https://doc.strider.tech/content/receipts.json';
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    const [receipts, setReceipts] = useState([]);

    useEffect(() => {

    const fetchData = async (response) => {
        try {
            const response = await fetch(proxyUrl + requestUrl,requestOptions);
            const results = await response.json();
            // Only put the results in state, ie, the actual receipts array
            return setReceipts(results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    fetchData();
    },[]);

    return receipts;

}

export default GetReceiptData;