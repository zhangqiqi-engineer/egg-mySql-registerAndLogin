exports.index = async ctx => {
    ctx.body = `search: ${ctx.query.name}`;
};