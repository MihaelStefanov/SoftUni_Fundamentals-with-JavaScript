function solve(year) {
  
    if ((year % 100 !== 0) && (year % 400 !== 0) && (year % 4 == 0)) {
        console.log("yes"); 
    } else {
        console.log("no");
        
    }
console.log(2000 % 100);

}

solve(2000);