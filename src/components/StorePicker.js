import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    myInput = React.createRef();

    goToStore = event => {
        //stop form from submitting
        event.preventDefault();
        //get text from input
        const storeName = this.myInput.current.value;
        //change page from /store to /store/what-they-typed
        this.props.history.push(`/store/${storeName}`);
    };
    render() {
        return (
            <form className='store-selector' onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input 
                    type='text' 
                    ref={this.myInput}
                    required
                    placeholder='Store Name'
                    defaultValue= {getFunName()}
                />
                <button type='submit'>Select a store</button>
            </form>
        );
    }
}

export default StorePicker;