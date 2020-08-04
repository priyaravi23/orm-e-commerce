const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
    {
        // define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // define product_id column
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "product",
                key: "id"
            }
        },
        // define tag_id column
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "tag",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag',
    }
);

module.exports = ProductTag;