import { Sequelize } from 'sequelize'
import mysql2 from 'mysql2'

// const instance = new Sequelize(
//   'geral', 
//   'root', 
//   '', 
//   {
//     host: 'localhost',
//     dialect: 'mysql'
// })

const instance = new Sequelize(
  'palhet67_geral',
  'palhet67_usuario',
  '6m&G7ZPNh*69',
  {
    host: '108.179.193.193',
    dialect: 'mysql',
    dialectModule: mysql2
  })

export default instance