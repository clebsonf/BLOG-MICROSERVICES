const router = require('express').Router();
const postsRoutes = require('./posts.routes')

const ROUTE_PATH = '/api/v1';

router.use(ROUTE_PATH,postsRoutes);

module.exports = router;