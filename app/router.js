module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
    router.get('/user/:id', controller.user.info);
    router.get('/search', controller.search.index);
    router.post('createPost', '/api/posts', controller.post.create);
    //用户登陆
    router.post('/app/login', controller.register.loginIndex);
    //用户注册
    router.post('/app/register', controller.register.registerIndex);




};