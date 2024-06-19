import {createPool} from 'mysql2/promise';
import {db_HOST,db_PASSWORD,db_USER,db_PORT,db_DB} from './config.js';
export const pool = createPool({
    host: db_HOST,
    user: db_USER,
    password: db_PASSWORD,
    port: db_PORT, 
    database: db_DB
});
