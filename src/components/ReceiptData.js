import React from 'react';
import {receipts} from '../data/receipts';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function ReceiptData() {
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
