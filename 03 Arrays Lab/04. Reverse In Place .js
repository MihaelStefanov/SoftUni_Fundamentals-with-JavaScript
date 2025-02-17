function solve1(arr) {
    console.log(arr.reverse().join(' '));
    
}


function solve2(arr) {
    let reversedArr = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
  
    console.log(reversedArr.join(' '));
      
  }
  

function solve3(arr) {
  let reversedArrStr = '';

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArrStr += `${arr[i]} `;
  }

  console.log(reversedArrStr);
    
}


solve1(['a', 'b', 'c', 'd', 'e']);
solve2(['a', 'b', 'c', 'd', 'e']);
solve3(['a', 'b', 'c', 'd', 'e']);



