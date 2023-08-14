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

            // For some reason, I just coult not get a FETCH/GET request to work from the provided "requestURL" down below without setting up a proxy first.
            // Upon hours of research trying to debug why the receipts.json would come across the network upon inspection, but I couldn't access the actual data,
            // I found this solution which utilizes a proxy URL for the cors issue at hand.  It looks like it could also be solved by setting up my own server,
            // so that would be a future feature which I would like to configure and enable CORS with on my own.
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