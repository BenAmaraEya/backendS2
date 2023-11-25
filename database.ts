import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'rhmangement',
  dialect: 'mysql',
  username: 'root',
  password: 'root123',
  port:3300,
  models: [__dirname + '/models'],
});

export default sequelize;
