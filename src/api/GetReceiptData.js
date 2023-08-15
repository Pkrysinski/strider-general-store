import { useEffect, useState } from "react";

// This is the function which is called any time the home page is rendered as a React component, utilizing the FETCH api to retrieve the data from the provided URL.
function GetReceiptData() {

    // useState (React hook)
    const [receipts, setReceipts] = useState([]);

    // useEffect React hook
    useEffect(() => {
        const fetchData = async (response) => {
            let requestOptions = {
                method: 'GET',
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            let requestUrl = 'http://localhost:4000/receipts';

            try {
                const response = await fetch(requestUrl,requestOptions);
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