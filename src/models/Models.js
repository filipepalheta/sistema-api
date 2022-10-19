import instance from "../config/conn.js";
import { DataTypes } from "sequelize";

export const Assinatura_Registros = instance.define('assinatura_registros', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    plan_my_id: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    value: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    myID: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    periodicity: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    name: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    email: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    phone: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    adress_cep: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    street: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    number: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    complement: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    city: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    bairro: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    state: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    card_operator: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    card_number: {
        type: DataTypes.NUMBER, 
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
})