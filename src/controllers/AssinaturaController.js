
class AssinaturaController {

    static createAssinatura = async (req, res) => {
        const emails = req.body.Subscription.Customer.emails
        console.log('Emails: ', emails)

        emails.map((email) => console.log(email))
        res.json({success: true})
    }
}

export default AssinaturaController