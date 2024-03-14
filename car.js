const EventEmitter = require('events');
const carBuyer = new EventEmitter();

carBuyer.on('explore', (budget) => {
    console.log(`Event 1: Exploring for a car on the internet in the budget of ${budget}.`);
});
carBuyer.on('showroom', (carModel) => {
    console.log(`Event 2: Go to the showroom for ${carModel}`);
});
carBuyer.on('testDrive', (carModel) => {
    console.log(`Event 3: Test driving the ${carModel} to evaluate its performance.`);
});
carBuyer.on('negotiatePrice', (carModel, initialPrice) => {
    console.log(`Event 4: Negotiating the price for the ${carModel}. Initial price: ${initialPrice}.`);
});
carBuyer.on('finalizeDeal', (carModel, finalPrice) => {
    console.log(`Event 5: Finalizing the deal for the ${carModel}. Agreed price: ${finalPrice}.`);
});
carBuyer.on('bringHome', (carModel) => {
    console.log(`Event 6: Congratulations! Bring home your ${carModel}.`);
});
carBuyer.on('celebratePurchase', (carModel) => {
    console.log(`Event 7: Celebrating the purchase of the ${carModel}. `);
});

carBuyer.emit('explore', 25000); 
carBuyer.emit("showroom","Tesla Model 3");
carBuyer.emit('testDrive', 'Tesla Model 3'); 
carBuyer.emit('negotiatePrice', 'Tesla Model 3', 28000); 
carBuyer.emit('finalizeDeal', 'Tesla Model 3', 26500); 
carBuyer.emit('bringHome','Tesla Model 3');
carBuyer.emit('celebratePurchase', 'Tesla Model 3');