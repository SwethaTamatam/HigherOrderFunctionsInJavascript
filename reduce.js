// reducer takes an array, reducer() and initialValue as argument
function reduce(arr, reducer, initialValue) { 
       let accumulator = initialValue === undefined ? 0 : initialValue        
       // loop though array    
        for(let i=0;i<arr.length;i++)        
        accumulator = reducer(accumulator, arr[i]);    
        return accumulator;
}