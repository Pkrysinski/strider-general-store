import React, { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ReceiptData() {

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
    });

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell align="right">Customer ID</TableCell>
                <TableCell align="right">Customer Name</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Date</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {receipts.map((receipt) => (
                <TableRow
                key={receipt.OrderId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="receipt">
                    {receipt.OrderId}
                </TableCell>
                <TableCell align="right">{receipt.CustomerId}</TableCell>
                <TableCell align="right">{receipt.CustomerName}</TableCell>
                <TableCell align="right">{receipt.Total}</TableCell>
                <TableCell align="right">{receipt.Date}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}

export default ReceiptData;