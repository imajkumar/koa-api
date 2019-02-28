const Joi = require('joi');
function hello (ctx) {
  let user = ctx.request.query.user
  console.log(user);
  ctx.ok({ id: 123, name: 'Dat Boi' });
}
function register (ctx) {
let email = ctx.request.body.email
let password = ctx.request.body.password 
const schema = Joi.object().keys({
  email: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  access_token: [Joi.string(), Joi.number()],
  birthyear: Joi.number().integer().min(1900).max(2013),
  email: Joi.string().email({ minDomainAtoms: 2 }),
}).with('email', 'password').without('password', 'access_token');

// Return result.
const result = Joi.validate({ email: email, password: password }, schema);

ctx.ok({ 
  'status':0,
  'message':result.error['message']
 });

}//end of register



module.exports = {
  hello,
  register
}
