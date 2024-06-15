import { Client } from 'pg';

const dbConfig = {
  "user": "postgres",
  "password": "postgres",
  "host": "localhost",
  "port": 5433,
  "database": "maestros"
};

const dbClient = new Client(dbConfig);
dbClient
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
  });

export default dbClient;
