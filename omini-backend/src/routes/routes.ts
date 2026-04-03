import Router from 'express'

const routes = Router();

routes.get('/healthcheck', (req, res) => {
    res.json({status: 'Omini is alive!'})
})

export default routes;