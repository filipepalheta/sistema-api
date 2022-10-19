
class AssinaturaController {

    static createAssinatura = async (req, res) => {
        // const emails = req.body.Subscription.Customer.emails
        const dadosReq = req.body

        if(dadosReq.Subscription){
            console.log(dadosReq.Subscription.status)
        }else if(dadosReq.billInternalId){
            console.log(dadosReq)
        }
        res.json({success: true})
    }
}

export default AssinaturaController