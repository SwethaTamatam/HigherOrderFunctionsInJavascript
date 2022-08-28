function filter(arr, filterFunc) 
{   const mapArr = []; // empty array        
// loop though array    
    for(let i=0;i<arr.length;i++) {        
        const result = filterFunc(arr[i]);
        if(result){
            mapArr.push(result); 
        }
           
    }    
    return mapArr;
}