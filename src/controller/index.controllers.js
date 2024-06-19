import {pool} from '../db.js';

export const Getquery = async (req,res)=>{
    const [result] = await pool.query('select "pong" as result');
     res.json(result[0]);
 };