const Router = require('koa-router');
const bllUser = require('../../business-logic-layer/bll.user');


let apiRouter = new Router({
  prefix: '/api'
});


let uid = 0;
apiRouter.all('/test/:params', async ctx => {
  console.log(`>>>> 测试 ${ctx.method} ${ctx.url}`);

  if (!ctx.session.uid) {
    ctx.session.uid = ++uid;
  }
  ctx.body = {
    status: 200,
    message: 'OK',
    params: ctx.params,
    query: ctx.query,
    rqbody: ctx.request.body,
    session: ctx.session,
  }
});


apiRouter.put('/users', async ctx => {
  let user = ctx.request.body;
  try {
    let res = await bllUser.create(user);

    ctx.body = {
      res
    };
  } catch (ex) {
    ctx.body = {
      error: ex
    };
  }
})


module.exports = apiRouter;