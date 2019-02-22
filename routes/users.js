const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/users')


router.get('/', Ctrl.hello)
router.post('/register', Ctrl.register)

module.exports = router.routes()
