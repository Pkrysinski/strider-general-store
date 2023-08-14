import * as React from 'react';
import { useParams } from "react-router-dom";
import GetReceiptData from "../api/GetReceiptData";

// This is the rendered component when a single item from the home page is selected to view the amount of times it's been ordered across customers.
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