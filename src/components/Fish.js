import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
    handleClick = ()=> {
        this.props.addToOrder(this.props.index);
    };
    render() {
        const {image, name, price, status, desc} = this.props.details;
        const isAvailable = status === 'available';

        return(
            <div className='single-fish'>
                <li className='menu-fish'>
                    <img src={image} alt={this.props.details.name}/>
                    <h3 className='fish-name'>
                        {name}
                        <span className='price'>{formatPrice(price)}</span>
                    </h3>
                    <p>{desc}</p>
                    <button disabled={!isAvailable} onClick={this.handleClick}>{isAvailable? 'Add to Cart' : 'Sold Out'}</button>
                </li>
            </div>
        );
    }
}

export default Fish;