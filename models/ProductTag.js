const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
    {
        // define product_id column
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // define tag_id column
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false
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