
function hello (ctx) {
  let user = ctx.request.query.user
  console.log(user);
  ctx.ok({ id: 123, name: 'Dat Boi' });
}
function register (ctx) {
  let email = ctx.request.body.email
  let password = ctx.request.body.password
  // console.log(user);
   ctx.ok({ email :email });
}


module.exports = {
  hello,
  register
}
