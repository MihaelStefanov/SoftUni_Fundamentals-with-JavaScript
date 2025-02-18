function solve(arr1, arr2) {

    let sum = 0;
    let idx = 0;
    let isTrue = true;

    arr1 = arr1.map(Number);
    arr2 = arr2.map(Number);


    for (let i = 0; i <= arr1.length - 1; i++) {

        if (arr1[i] != arr2[i]) {
            isTrue = false;
            idx = i;
            break;
        }

        sum += arr1[i];
        
    }
    
    if (isTrue) {
        console.log(`Arrays are identical. Sum: ${sum}`);

    } else {
        console.log(`Arrays are not identical. Found difference at ${idx} index`);
        
    }

}


solve(['1','2','3','4','5'], ['1','2','3','4']);

