import React, { Component } from 'react';

import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:[
            { id: 1 , value: 0 },
            { id: 2 , value: 0 },
            { id: 3 , value: 0 },
            { id: 4 , value: 0 }
        ]
     }; 


     handleDelete = counterId => {
        const counters = this.state.counters.filter( c => c.id !== counterId)
        this.setState({counters})
     };

     handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;

        this.setState({counters});
     };
     

     handleReset = () => {
        const counters = this.state.counters.map( c => 
            {c.value = 0;
            return c;
        });
        this.setState({counters});
     }


    handleRefresh = () => {
    window.location.reload(); 
  };
    render() { 
        return (
            <div>
                {this.state.counters.map(counter => (
                <Counter
                key={counter.id}
                onDelete = {this.handleDelete}
                onIncrement = { this.handleIncrement}
                counter = {counter}
                />
                ))};
                <button onClick={this.handleReset} className='  ml-[4rem] mr-[1rem] bg-blue-500 rounded-md text-white border-[.1rem] border-blue-500 py-[.5rem] px-[2rem] text-xl font-semibold '>Reset</button>
                <button onClick={this.handleRefresh} className=' bg-blue-500 rounded-md text-white border-[.1rem] border-blue-500 py-[.5rem] px-[2rem] text-xl font-semibold '>Refresh</button>
            </div>
        );
    }
}
 
export default Counters;