const accountRouter = require("./account.route");
const adminRouter = require("./admin.route");

const useRoutes = function(app){
    app.use('/api/account',accountRouter);
    app.use("/api/admin",adminRouter);
  }
  module.exports = {useRoutes};