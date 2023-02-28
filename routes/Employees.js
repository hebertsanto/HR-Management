const router = require("express").Router();

const Employee = require('../models/employees');

router.get("/employee", async (req, res) => {
    try{
        const AllEmployees = await Employee.find();
         res.json(AllEmployees).status(200);
    
    }catch(err){
        res.status(500).json({
             messsage: err.message
        })
    }
})

router.post("/employee/add", async (req, res) => {
    const {name, email } = req.body;
    try{
         await Employee.create({name, email})
         res.status(200).json({
             messsage: "Employee added successfully"
         })
    }catch(err){
         res.status(500).json({
              messsage: err.message
         })
    }
    
})

router.delete("/employee/delete/:id", async (req, res) => {
     try{
         await Employee.findByIdAndDelete(req.params.id)

         re.status(200).json({
             message: "Employee deleted"
         })
     }catch(err){
         res.status(500).json({
              message:"error occured"
         })
     }
})

router.put("/employee/edit/:id", async (req, res) => {
    try{
         await Employee.findByIdAndUpdate(req.params.id, req.body)
         res.status(200).json({
             message: "Employee updated successfully"
         })
    }catch(err){
         res.status(500).json({
             message: "Error updating employee"
         })
    }
})


module.exports = router;