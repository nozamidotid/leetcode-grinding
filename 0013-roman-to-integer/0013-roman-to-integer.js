/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    
    const symbol = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }
    
    for (let i = 0; i < s.length; i++ ){
        const currentValue = symbol[s[i]];
        // console.log(currentValue)
        const nextValue = symbol[s[i+1]];
        
        if (currentValue < nextValue){
            result += nextValue - currentValue
            i ++;
        }else{
            result += currentValue
        }
    }
    
    return result;
    
};