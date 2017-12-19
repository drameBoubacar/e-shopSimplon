import express from 'express';  

let router = express.Router();

router.get('/products', (req, res) => {
    res.send('coucou')
})

export default router