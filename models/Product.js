// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
    {
        // define product_name column
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define price column
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        // define stock column
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // define category_id column
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;