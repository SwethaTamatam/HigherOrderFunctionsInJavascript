function foreach(arr, forEachFunc) 
{    const mapArr = []; // empty array        
// loop though array    
    for(let i=0;i<arr.length;i++) {        
        const result = forEachFunc(arr[i]);          
    }    
}