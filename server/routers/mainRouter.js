const Router = require( 'koa-router' );

// 导入子路由
const apiRouter = require( './apiRouter/apiRouter' );

let mainRouter = new Router();

mainRouter.use( apiRouter.routes(), apiRouter.allowedMethods() );


module.exports = mainRouter;