const Service = require('egg').Service;
const md5 = require('md5');


class RegisterService extends Service {

    //注册
    async registerIndex(queryName, queryPass) {
        const queryUserName = await this.app.mysql.get('information', {
            useName: queryName,
        });
        const returnData = {
            useName: queryName,
            password: md5(queryPass),
        };
        if (!queryUserName) {
            const result = await this.app.mysql.insert('information', returnData);
            console.log('result', result);
            return '新增一条数据成功';
        }
        console.log('该用户名已注册');
        return '该用户名已注册';

    }

    //登陆
    async loginIndex(queryName, queryPass) {
        const ctx = this.ctx;
        const returnData = {};
        const existUser = await this.getUserByName(queryName);
        if (!existUser) return '用户不存在'; // 用户不存在
        const checkPasswordResult = this.checkPassword(existUser, queryPass);
        if (!checkPasswordResult) {
            return '密码错误';// 密码错误
        }
        console.log('existUser', existUser);
        if (existUser.status === 0) {
            returnData.message = existUser.status;
            return returnData;
        } else if (existUser.status === 1) {
            returnData.message = existUser.status;
            ctx.session.user_id = existUser.user_id;
            return returnData;
        } else if (existUser.status === 2) {
            returnData.message = existUser.status;
            return returnData;
        }
        return '登陆成功';// 成功




    }

    async getUserByName(userName) {
        const user = await this.app.mysql.get('information', {
            useName: userName,
        });
        return user;
    }

    async checkPassword(userInfo, userSubmitPassword) {
        const dbPassword = userInfo.password;
        const md5 = require('md5');
        return dbPassword === md5(userSubmitPassword);
    }

}
module.exports = RegisterService;