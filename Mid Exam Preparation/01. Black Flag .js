function solve(inputArr) {
    let myArr = inputArr.map(Number);
    
    let daysOfPlunder = myArr.shift();
    let dailyPlunder  = myArr.shift();
    let expectedPlunder  = myArr.shift();

    let totalGain = 0;
    
    for (let i = 1; i <= daysOfPlunder; i++) {

        totalGain += dailyPlunder;

        if (i % 3 == 0) {
            totalGain += (dailyPlunder * 0.50);
        }
        
        if (i % 5 == 0) {
                totalGain -= totalGain * 0.30;
            }
            
            
        }

        
        if (totalGain >= expectedPlunder) {
            return `Ahoy! ${totalGain.toFixed(2)} plunder gained.`;
        } else {
            let percentageLeft = (totalGain / expectedPlunder)  * 100;
            return `Collected only ${percentageLeft.toFixed(2)}% of the plunder.`;
            
        }

}

console.log(solve(["5","40", "100"]));

console.log(solve(["10", "20", "380"]));