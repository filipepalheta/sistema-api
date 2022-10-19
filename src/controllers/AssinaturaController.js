
class AssinaturaController {

    static createAssinatura = async (req, res) => {
        // const emails = req.body.Subscription.Customer.emails
        const dadosReq = req.body
        const transactionType = req.body.event
        console.log('Tipo de transação: ',transactionType)
        console.log(dadosReq)

        // if(dadosReq.Subscription){
        //     console.log(dadosReq.Subscription.status)
        // }else{
        //     console.log(dadosReq)
        // }
        res.json({success: true})
    }
}

export default AssinaturaController