/**
 *  REVERSER A NUMBER
 * const reverseNumber=(num)=>{
    let rem =0,res = 0;
    while(num>0){
        rem = num%10;
        res = res*10 +rem ;
        num = num/10; 
    }
    return res;
}
const result = reverseNumber(123)

console.log(result)
 */

/**
 * REVERSE A STRING 
 * const reverseString = (str) =>{
    return str.split("").reverse().join("")
    let revString = "";
    for (let i = str.length-1; i >= 0 ; i--) {
        revString += str[i];  
    }
    return revString;
}

const result = reverseString("ASRU");

console.log(result)
 */

/**
 * REMOVE DUPLICATE FROM ARRAY
 * const removeDuplicate = (arr)=>{
    let uniqueArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if(!uniqueArr.includes(arr[i])){
    //         uniqueArr.push(arr[i])
    //     }        
    // }

     arr.map((num,ind,arr)=>{
        if(arr.indexOf(num) === ind){
            uniqueArr.push(num)
        }
    })
    return uniqueArr
}

const result = removeDuplicate([1,2,3,4,3,2]);

console.log(result)
 */

/**
 * COUNT DUPLICATES
 * const countDuplicates = (arr)=>{
    const res= arr.reduce((acc,num)=>{
        acc[num] = (acc[num] || 0) + 1
        return acc
    },{})
    return res;
}

const result = countDuplicates([1,2,3,4,5,3,2,1,2,1,2]);

console.log(result)
 * 
 */

/**
 * FIND LARGEST NUMBER 
 * const findLargestNumber = (arr)=>{
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
    return arr.sort()[arr.length-1]
}

const result = findLargestNumber([12,3,4,5,5,6,73])
console.log(result)
 * 
 */

/**
 * REMOVE DUPLICATE CHARACTER
 * const removeDuplicateChar = (str) => {
  let uniqueStr = "";

  for (let i = 0; i < str.length; i++) {
    if (!uniqueStr.includes(str[i])) {
      uniqueStr += str[i];
    }
  }
  return uniqueStr;
};

const result = removeDuplicateChar("assar");

console.log(result);
 *
 */

/**
  * FIND MISSING NUMBER
  *  const findMissingNumber = (arr) =>{
    let n = arr.length +1;
    let total = (n * (n+1))/2;
    let sum = arr.reduce((a,b)=> a+b , 0);

    return total - sum
 }

 const result = findMissingNumber([2,3,4,5,6])
 console.log(result) 
  * 
  */

/**
 * SWAP NUMBERS
 * let a = 5,
  b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("a" , a , "b" , b)
 */

