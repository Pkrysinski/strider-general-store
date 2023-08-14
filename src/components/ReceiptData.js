import React from "react";
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GetReceiptData from "../api/GetReceiptData";

function ReceiptData() {

    const receipts = GetReceiptData();

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Order ID</TableCell>
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
                        <TableCell align="right">{receipt.CustomerName}</TableCell>
                        <TableCell align="right">{receipt.Total}</TableCell>
                        <TableCell align="right">{receipt.Date}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <p>Please click on any customer name below to view their order history...</p>

            {/* TODO: Hoping to get this part appropriately uniquely sorted out by submissing, but hard-coding for now */}
            {/* {receipts.map(({ CustomerId, CustomerName }) => (
                <li key={CustomerId}>
                <Link to={`customer/${CustomerId}`}>{CustomerName}</Link>
                </li>
            ))} */}
            <li key={1}>
                <Link to={'customer/1'}>Elizabeth</Link>
            </li>
            <li key={2}>
                <Link to={'customer/2'}>Alexander</Link>
            </li>          
            <li key={3}>
                <Link to={'customer/3'}>Emira</Link>
            </li>              
            <li key={4}>
                <Link to={'customer/4'}>LJ</Link>
            </li>     
            <li key={5}>
                <Link to={'customer/5'}>Armand</Link>
            </li>   
        </div>
    );
}

export default ReceiptData;