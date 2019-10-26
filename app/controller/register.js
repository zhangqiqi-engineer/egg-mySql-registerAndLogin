const Controller = require('egg').Controller;

class RegisterController extends Controller {

    // 注册
    async registerIndex() {
        const ctx = this.ctx;
        const queryName = ctx.request.body.useName ? ctx.request.body.useName : 'zhangqi';
        const queryPass = ctx.request.body.password ? ctx.request.body.password : '123456';
        ctx.body = await ctx.service.register.registerIndex(queryName, queryPass);

    }


    // 登陆
    async loginIndex() {
        const ctx = this.ctx;
        const queryUserName = ctx.request.body.useName ? ctx.request.body.useName : 'zhangqi';
        const queryPass = ctx.request.body.password ? ctx.request.body.password : '123456';
        ctx.body = await ctx.service.register.loginIndex(queryUserName, queryPass);
    }


}

module.exports = RegisterController;