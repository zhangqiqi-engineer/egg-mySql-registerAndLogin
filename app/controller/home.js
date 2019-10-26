const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        // this.ctx.body = 'Hello world lalal ';
        const ctx = this.ctx;
        // await ctx.render('register/form.tpl');
        await ctx.render('login/form.tpl');

    }
}

module.exports = HomeController;