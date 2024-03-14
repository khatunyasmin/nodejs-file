function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

const customers = [
    { name:"Noah",
      principal: 1000,
      rate: 5,
      time: 2,
    }
  ];
  
customers.forEach(client =>{
    const {principal, rate, time}=client;
    client.si = simpleInterest(principal, rate, time);
})
  module.exports = customers;