function solve(num, precision) {

    if (precision > 15) {
        precision = 15;
    }
  
    let fixedNum = parseFloat(num.toFixed(precision));

     console.log(fixedNum);
     
}

solve(10.5, 3);


