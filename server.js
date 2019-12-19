const http = require( 'http' );
const path = require( 'path' );
const fs = require( 'fs' );

const Koa = require( 'koa' );
const serve = require( 'koa-static' );
const body = require( 'koa-body' );
const session = require( 'koa-session' );

const config = require( './server-config' );
const mainRouter = require( './server/routers/mainRouter' );



const isEnvDevelopment = process.env.MODE === 'development';
const isEnvProduction = process.env.MODE === 'production';

if ( config.initDB ) {
  require( './server/database-init/init' );
}


let PORT = Number( process.env.PORT || config.port || 3000 );

let middlewares = [
  isEnvProduction && serve( 'build' ),  /** 配置页面路径 */
 
  body(), /** 处理 报文 */
  
  mainRouter.routes(), /** 接口路由 */

  isEnvProduction && (async ctx => { /** 兜底操作, 处理页面路由 */
    ctx.type = 'text/html';
    ctx.body = fs.readFileSync( path.resolve( __dirname, './build/index.html' ) );
  })
].filter( Boolean );


let app = new Koa();

/** 配置 session */
app.keys = ['some secret hurr'];
app.use( session( config.session, app ) );

middlewares.forEach( m => app.use( m ) );

let server = http.createServer( app.callback() );



server.listen( PORT, () => {
  console.log( `>>> linstening port ${ PORT } ...` );
} );

