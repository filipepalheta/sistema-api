import instance from "../config/conn.js";
import { DataTypes } from "sequelize";

export const Assinatura_Registros = instance.define('assinatura_registros', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    vencimento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    plan_my_id: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    value: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    galaxyPayId: {
        type: DataTypes.NUMBER, 
        allowNull: true
    },
    periodicity: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    email: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    card_operator: {
        type: DataTypes.STRING, 
        allowNull: true
    },
    card_number: {
        type: DataTypes.STRING, 
        allowNull: true
    },
    costumer_id: {
        type: DataTypes.NUMBER, 
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true
    },
    galaxyPay: {
        type: DataTypes.ENUM('sim', 'nao'),
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
})

export const Users = instance.define('users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
})

export const Assinaturas = instance.define('Assinaturas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    criado_em: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tipo_de_assinatura: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
})