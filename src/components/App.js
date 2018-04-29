import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    
    addFish = fish => {
        //1. copy existing state of fishes object (clones it w/ ES6 spread object literal syntax)
        const fishes = {...this.state.fishes};
        //add our new fish object, with unique key based on current millisecond
        fishes[`fish${Date.now()}`] = fish;
        //set new fishes object to be the current state
        this.setState({
            fishes: fishes
        });
    };

    loadSampleFishes = ()=> {
        this.setState({fishes: sampleFishes});
    };

    addToOrder = (key)=> {
        //1. take a copy of the state
        const order = {...this.state.order};
        //2. add to or update order amount
        //this means if order.fish1 exists, increment by 1; otherwiset set = to 1
        order[key] = order[key] + 1 || 1;
        //3. setState to reflect updated state
        //ES6 syntax for order:order
        this.setState({
            order
        });
    };

    render() {
        return(
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh Seafood Market'/>
                    <ul className='fishes'>
                        {Object.keys(this.state.fishes).map(key=>
                            <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder}
                            />
                        )}
                    </ul>

                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory 
                    loadSampleFishes = {this.loadSampleFishes} 
                    addFish={this.addFish}
                />
            </div>
        );
    }
}

export default App;