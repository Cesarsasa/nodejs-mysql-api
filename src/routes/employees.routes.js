import { Router } from "express";
import {Getemployees,Postemployees,Putemployees,Deleteemployees, Getemployee } from "../controller/employees.controller.js";

const router = Router();


router.get('/employees', Getemployees);
router.get('/employees/:id',Getemployee);
 router.post('/employees',   Postemployees);
 router.patch('/employees/:id',   Putemployees);
 router.delete('/employees/:id',   Deleteemployees);
 

export default router;  