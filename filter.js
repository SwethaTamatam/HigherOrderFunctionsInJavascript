function filter(arr, mapFunc) 
{   const mapArr = []; // empty array        
// loop though array    
    for(let i=0;i<arr.length;i++) {        
        const result = mapFunc(arr[i]);
        if(result){
            mapArr.push(result); 
        }
           
    }    
    return mapArr;
}