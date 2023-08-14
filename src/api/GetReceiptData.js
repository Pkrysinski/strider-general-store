import { useEffect, useState } from "react";

function GetReceiptData() {

    const [receipts, setReceipts] = useState([]);

    useEffect(() => {
        const fetchData = async (response) => {
            let requestOptions = {
                method: 'GET',
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                mode: 'no-cors'
            };

            let requestUrl = 'https://doc.strider.tech/content/receipts.json';
            let proxyUrl = 'https://cors-anywhere.herokuapp.com/';

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