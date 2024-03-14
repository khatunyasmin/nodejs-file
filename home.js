const EventEmitter = require('events');
const homeBuyer = new EventEmitter();

homeBuyer.on('searchHouse', (budget) => {
    console.log(`Event 1: Searching for a house within the budget of ${budget}.`);
});

homeBuyer.on('visitProperty', (location) => {
    console.log(`Event 2: Visiting properties in ${location}.`);
});

homeBuyer.on('negotiatePrice', (property, initialPrice) => {
    console.log(`Event 3: Negotiating the price for the ${property}. Initial price: ${initialPrice}.`);
});

homeBuyer.on('finalizeDeal', (property, finalPrice) => {
    console.log(`Event 4: Finalizing the deal for the ${property}. Agreed price: ${finalPrice}.`);
});

homeBuyer.on('moveIn', (property) => {
    console.log(`Event 5: Congratulations! Moving into your new ${property}.`);
});

homeBuyer.emit('searchHouse', 300000);
homeBuyer.emit('visitProperty', 'Bhubneswar');
homeBuyer.emit('negotiatePrice', 'Dream House', 320000);
homeBuyer.emit('finalizeDeal', 'Dream House', 305000);
homeBuyer.emit('moveIn', 'Dream House');
