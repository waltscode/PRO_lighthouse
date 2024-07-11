const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Customer extends Model {}

Customer.init(
    {
        customerNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        customerName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        customerId: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        contactLastName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        contactFirstName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        addressLine1: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        addressLine2: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        city: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        postalCode: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        country: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        amount_spent: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Customer',
        tableName: 'Customers',
        timestamps: false
    }
);

module.exports = Customer;