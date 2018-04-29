import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component {
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish.status === 'available';
        if(!isAvailable) {
            //if fish isn't available, return message based on its name (or just "fish" if name is not available)
            return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is not available</li>;
        }
        return <li key={key}>
            {count} lbs. {fish.name}
            {formatPrice(count*fish.price)}
        </li>;
    }
    render() {
        //make array of order ID keys
        const orderIds = Object.keys(this.props.order);
        //we want to tally the order total $
        const total = orderIds.reduce((prevTotal, key)=> {
            const fish = this.props.fishes[key];
            //check count of the fish
            const count = this.props.order[key];
            //check if there is a fish and if it's available
            const isAvailable = fish &&fish.status === 'available';
            //if the fish us available, add total ordered to prior total
            if(isAvailable) {
                return prevTotal + (count*fish.price);
            }
            //if not available, return prior total
            return prevTotal;
        }, 0);
        return(
            <div className='order-wrap'>
                <h2>Order</h2>
                <ul>
                {orderIds.map(this.renderOrder)}
                </ul>
                <div className='total'>
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}
export default Order;