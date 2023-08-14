import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import GetReceiptData from "../api/GetReceiptData";
import Stack from '@mui/material/Stack';

function Customer() {

    const { id } = useParams();
    const receipts = GetReceiptData();

    const customerReceipts = receipts.filter(({CustomerId}) => id.includes(CustomerId));
    const customerName = [...new Set(customerReceipts.map(x => x.CustomerName))];


    return (
        <div>
            <h1>Customer Name: {customerName}</h1>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={6} alignItems="center">
                    {customerReceipts.map(receipt => {
                        return (
                            <Card sx={{ minWidth: 275 }} key={receipt.OrderId}>
                                <CardContent>
                                    {/* display receipt Receipt Number */}
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Receipt Number: {receipt.OrderId}
                                    </Typography>
                                    {/* display receipt Total */}
                                    <Typography variant="h5" component="div">
                                    Receipt Total: {receipt.Total}
                                    </Typography>
                                    {/* display receipt Date */}
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Receipt Date: {receipt.Date}
                                    </Typography>
                                    {/* display receipt Items */}
                                    <Typography variant="body2">
                                        {receipt.Items.map((arr) => {
                                            return (
                                                <span key={arr.Item}>
                                                    <Typography component={'span'} variant="body2">
                                                        Item: {arr.Item}
                                                    </Typography>
                                                    <br></br>
                                                    <Typography component={'span'} variant="body2">
                                                        Price: {arr.ItemPrice}
                                                    </Typography>
                                                    <br></br>
                                                    <Typography component={'span'} variant="body2">
                                                        Quantity: {arr.Quantity}
                                                    </Typography>
                                                    <br></br>
                                                    <br></br>
                                                </span>
                                            );
                                        })}                                        
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })}
                </Stack>
            </Box>
        </div>
    );
}

export default Customer;