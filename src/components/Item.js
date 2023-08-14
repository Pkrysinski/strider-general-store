import * as React from 'react';
import { useParams } from "react-router-dom";
import GetReceiptData from "../api/GetReceiptData";

function Item() {

    const { item } = useParams();
    const receipts = GetReceiptData();

    let itemCount = 0;
    let itemString = item;
    
    receipts.forEach(order => {
        order.Items.forEach(item => {
            if (item.Item === itemString) {
                itemCount++;
            }
        });
    });

    return (
        <div>
            <h2>Item: {item}</h2>
            <h2>Total Ordered: {itemCount}</h2>
        </div>
    );
}

export default Item;