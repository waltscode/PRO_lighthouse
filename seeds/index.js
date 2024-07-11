const sequelize = require('../config/connection');
const seedCustomers = require ('./customerSeeds');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCustomers();
    console.log('\n----- CUSTOMERS SEEDED -----\n');
    process.exit(0);
}

seedAll();