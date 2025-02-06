function solve(peopleCount, type, day) {

    let costPerTicket = 0;
    let discount = 0;
    let TotalPrice = 0;
    

    switch(type) {
        case 'Students':
            if (day == 'Friday') {
                costPerTicket = 8.45; 
                TotalPrice += (costPerTicket * peopleCount);

            } else if (day == 'Saturday') {
                costPerTicket = 9.80;
                TotalPrice += (costPerTicket * peopleCount);

            } else if (day == 'Sunday') {
                costPerTicket = 10.46;
                TotalPrice += (costPerTicket * peopleCount);
            }

            if (peopleCount >= 30) {
                discount = TotalPrice * 0.15;
                TotalPrice -= discount;
            }
            break;

        case 'Business':
            if (day == 'Friday') {
                costPerTicket = 10.90; 
                TotalPrice += (costPerTicket * peopleCount);

            } else if (day == 'Saturday') {
                costPerTicket = 15.60;
                TotalPrice += (costPerTicket * peopleCount);
                
            } else if (day == 'Sunday') {
                costPerTicket = 16;
                TotalPrice += (costPerTicket * peopleCount)
            }

            if (peopleCount >= 100) {
                discount = costPerTicket * 10;
                TotalPrice -= discount;
            }
            break;

        case 'Regular':
            if (day == 'Friday') {
                costPerTicket = 15; 
                TotalPrice += (costPerTicket * peopleCount);

            } else if (day == 'Saturday') {
                costPerTicket = 20;
                TotalPrice += (costPerTicket * peopleCount);
                
            } else if (day == 'Sunday') {
                costPerTicket = 22.50;
                TotalPrice += (costPerTicket * peopleCount);
            }

            if (peopleCount >= 10 && peopleCount <= 20) {
                discount = TotalPrice * 0.05;
                TotalPrice -= discount;
            }
            break;
    }

    console.log(`Total price: ${TotalPrice.toFixed(2)}`);
    

}

solve(40, "Regular", "Saturday")