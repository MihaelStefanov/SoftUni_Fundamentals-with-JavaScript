function solve(inputArr) {
    let myObj = {};

    for (let line of inputArr) {
        let [companyName, employeeId] = line.split(' -> ');

        if(!myObj.hasOwnProperty(companyName)) {
            myObj[companyName] = [];
        } 

        if (!myObj[companyName].includes(employeeId)) {
            myObj[companyName].push(employeeId);
        }
        
    }

    let sortedArr = Object.entries(myObj).sort((a, b) => a[0].localeCompare(b[0]));
  
    for (let [company, arr] of sortedArr) {
        console.log(`${company}`);
        arr.forEach(employee => {
            console.log(`--`, employee);
        });
    }
}


solve(['SoftUni -> AA12345',
     'SoftUni -> BB12345',
      'Microsoft -> CC12345',
       'HP -> BB12345']);