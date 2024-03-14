function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

const customers = [
    { name:"Jacob",
      principal: 1000,
      rate: 5,
      time: 2,
    },
    { name:"David",
      principal: 2000,
      rate: 3,
      time: 1,
    },
    {
      name:"Joseph",
      principal: 6000,
      rate: 4,
      time: 2,
    },
    {
      name:"Marie",
      principal: 7000,
      rate: 6,
      time: 3,
    },
    {
      name:"Cyrus",
      principal: 6000,
      rate: 4,
      time: 2,
    }
  ];
  
//console.log(customers)

customers.forEach(client =>{
    const {principal, rate, time}=client;
    client.si = simpleInterest(principal, rate, time);
})
  module.exports = customers;