import express from 'express'
import AssinaturaController from '../controllers/AssinaturaController.js'
import HomeController from '../controllers/HomeController.js'

const router = express.Router()


router.get('/', (req, res) => {
    res.json({message: 'Server init'})
})

router.get('/assinatura/inserir', AssinaturaController.createAssinatura)

export default router;
