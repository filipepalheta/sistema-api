
class AssinaturaController {

    static createAssinatura = async (req, res) => {

        console.log(req.body)
        res.json({success: true})
    }
}

export default AssinaturaController