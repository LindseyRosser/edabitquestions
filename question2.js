function isSpecialArray(arr) {

        for (var i = 0; i < arr.length; i++)
            {
                    if (i % 2 === 0 ) {
                          if (arr[i] % 2 !== 0) return false; 
            }        
            else
                          if (arr[i] % 2 === 0) return false; 
       }

   return true
}