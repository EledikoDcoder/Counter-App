import React, { Component } from 'react';

class Counter extends Component {
   

   
    
    formatCount(){
        const c = this.props.counter.value
        return c === 0 ? "Zero": c;
    };
   
    render() { 
        return (
            <div className=' my-[2rem] mx-[4rem] gap-[1rem] flex items-center'>
                <h1 className=' rounded-md bg-blue-500 text-white py-[.5rem] px-[2rem] text-xl'>{this.formatCount()}</h1>
                <button onClick={ () => this.props.onIncrement (this.props.counter)} className=' rounded-md text-blue-500 border-[.1rem] border-blue-500 py-[.5rem] px-[2rem] text-xl font-semibold '>Increment</button>
                <button onClick={() => this.props.onDelete (this.props.counter.id)} className=' rounded-md text-white border-[.1rem] bg-red-500 border-red-500 py-[.5rem] px-[2rem] text-xl font-semibold '>Delete</button>
            </div>
        );
    }
}
 
export default Counter;