import express from 'express'
import AssinaturaController from '../controllers/AssinaturaController.js'


const router = express.Router()


router.get('/', (req, res) => {
    res.json({message: 'Server init'})
})

router.post('/assinatura/inserir', AssinaturaController.createAssinatura)

export default router;
