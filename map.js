function map(arr, mapFunc) 
{    const mapArr = []; // empty array        
// loop though array    
    for(let i=0;i<arr.length;i++) {        
        const result = mapFunc(arr[i]);       
        mapArr.push(result);    
    }    
    return mapArr;
}