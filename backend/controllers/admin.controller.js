const Admin = require("../models/admin.model");
const { CustomerModel } = require("../models/customer/customer.model");

const adminController ={};
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
adminController.allCustomer = async (req,res,next) =>{
    var result = await Admin.getAllCustomers();
    result.success == true ? res.Ok(result.data) :res.BadRequest(result.data);
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
adminController.createCustomer = async (req,res,next) =>{
    var model = new CustomerModel(req.body);
    if(!model.validate()) return res.BadRequest("All fields are required.");
    const result = await Admin.createCustomer(model);
    result.success == true ? res.Ok({},"Customer added") :res.BadRequest(result.data);
}


module.exports = adminController;