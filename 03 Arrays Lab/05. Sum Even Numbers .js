function solve(numsArr) {
    let sum = 0;

    for (const el of numsArr) {
      let curNum = Number(el);

      if (curNum % 2 == 0) {
          sum += curNum;
      }

    }

    console.log(sum);
    
}

solve(['1','2','3','4','5','6']);