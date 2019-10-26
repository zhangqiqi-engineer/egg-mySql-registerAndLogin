exports.keys = '_1571462318215_1083';
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};

exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

// add middleware robot
exports.middleware = [
    'robot'
];
// robot's configurations
exports.robot = {
    ua: [
        /curl/i,
        /Baiduspider/i,
    ],
};

exports.security = {
    csrf: false
};

exports.mysql = {
    client: {
        host: 'localhost',
        user: 'root',
        password: 'zq19950402!',
        database: 'app1',
        port: '3306',
    },
    app: true,
    agent: false,

};