import { pool } from "../db.js";

export const Getemployees =async (req,res)=> {
    try {
        const [rows]=await pool.query('SELECT *FROM employee');

   res.json(rows);

    } catch (error) {
        return send.status(500).json({
            message:"SORRY SOMETHING GOES WRONG"
        })
    }
   
};


export const Getemployee = async(req,res)=>{ 
    try {
        const id = req.params.id;
        const [rows] = await pool.query('select *from employee where id=?',[id]);
        if(rows.length <=0) return res.status(404).json({
            message:'Employee no found'
        });
            res.json(rows);
    } catch (error) {
        return send.status(500).json({
            message:"SORRY SOMETHING GOES WRONG"
        })
    }
}
export const Postemployees =  async(req,res)=> {
    try {
        const { name,salary}= req.body;
        const [rows]= await pool.query('INSERT INTO employee(name, salary) values (?,?)',[name,salary]);
          res.send({
              id: rows.insertId,
              name,
              salary
          });
    } catch (error) {
        return send.status(500).json({
            message:"SORRY SOMETHING GOES WRONG"
        })
    }

    
};
export const Putemployees =   async(req,res)=> {
    try {
        const {id}= req.params;
        const {name,salary}= req.body;
        const [result] = await pool.query('Update employee set name = ifnull(?,name), salary = ifnull(?,salary) where id =?',[name,salary,id]);
        if(result.affectedRows ==0){
            return res.status(404).json({
                message:"No uptade"
            });
        }
        const [rows]=await pool.query('select * from employee where id =?',[id]);
        res.json(rows[0])
    } catch (error) {
        return send.status(500).json({
            message:"SORRY SOMETHING GOES WRONG"
        })
    }
   
   
};

export const Deleteemployees =  async (req,res)=> {
    try {
        const id = req.params.id;
    const [rows] =await pool.query('Delete from employee where id = ?',[id]);
    if(rows.affectedRows <=0) return res.status(404).json({
    message : 'No delected id selected'

    });
    

    res.sendStatus(204);
    } catch (error) {
        return send.status(500).json({
            message:"SORRY SOMETHING GOES WRONG"
        });
    }
    

};