const Account = require("../models/account.model");
const { CreateAccountModel } = require("../models/account/createAccount.model");
const {LoginModel} = require("./../models/account/login.model");
const accountController ={};
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
accountController.login = async (req,res,next) =>{
    var model = new LoginModel(req.body);
    if(!model.validate()) return res.BadRequest("All fields are required.");
    const result = await Account.loginAccount(model);
    result.success == true ? res.Ok(result.data) :res.BadRequest(result.data);
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
accountController.create = async (req,res,next)=>{
    var model = new CreateAccountModel(req.body);
    if(!model.validate()) return res.BadRequest("All fields are required.");

    const result = await Account.createAccount(model);
    result.success == true ? res.Ok(result.data) :res.BadRequest(result.data);
}

module.exports = accountController;