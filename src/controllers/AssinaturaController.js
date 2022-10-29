import { Assinaturas, Assinatura_Registros, Users } from "../models/Models.js"

class AssinaturaController {

    static createAssinatura = async (req, res) => {
        const dadosReq = req.body
        const transactionType = req.body.event

        const plans = {
            1: 'Corte',
            4: 'Barba',
            5: 'Corte & Barba',
        }

        if (transactionType == 'transaction.status') {
            if (dadosReq.Subscription.status == 'active') {
                const helperCostumer = dadosReq.Subscription.Customer
                const helperCard = dadosReq.Subscription.PaymentMethodCreditCard.Card
                const planId = dadosReq.Subscription.planGalaxPayId
                const myID = dadosReq.Subscription.myId

                var costumer = {
                    galaxyPayId: helperCostumer.galaxPayId,
                    name: helperCostumer.name,
                    value: dadosReq.Subscription.value,
                    created_at: helperCostumer.createdAt,
                    updated_at: helperCostumer.updatedAt,
                    email: helperCostumer.emails[0],
                    phone: helperCostumer.phones[0],
                    adress: {
                        cep: helperCostumer.Address.zipCode,
                        street: helperCostumer.Address.street,
                        number: helperCostumer.Address.number,
                        complement: helperCostumer.Address.complement,
                        city: helperCostumer.Address.city,
                        bairro: helperCostumer.Address.neighborhood,
                        state: helperCostumer.Address.state 
                    },
                    card: {
                        number: helperCard.number,
                        expiresAt: helperCard.expiresAt,
                        brand: helperCard.Brand.name
                    }
                }

                await Assinatura_Registros.create({
                    plan_my_id: planId,
                    value: costumer.value,
                    galaxyPayId: costumer.galaxyPayId,
                    periodicity: dadosReq.Subscription.periodicity,
                    updated_at: costumer.updated_at,
                    name: costumer.name,
                    email: costumer.email,
                    phone: costumer.phone,
                    created_at: costumer.created_at,
                    adress_cep: costumer.adress.cep,
                    street: costumer.adress.street,
                    number: costumer.adress.number,
                    complement: costumer.adress.complement,
                    city: costumer.adress.city,
                    bairro: costumer.adress.bairro,
                    state: costumer.adress.state,
                    card_operator: costumer.card.brand,
                    card_number: costumer.card.number,
                    vencimento: dadosReq.Transaction.payday
                })

                const verifyEmail = await Users.findOne({
                    where: {
                        email: costumer.email
                    }
                })

                if(verifyEmail){
                    var date = new Date().toLocaleString()
                    const tipoDePlano = plans[planId]
                    console.log(tipoDePlano)
                    await Assinaturas.create({
                        id_usuario: verifyEmail.id,
                        nome: verifyEmail.name,
                        criado_em: date,
                        tipo_de_assinatura: tipoDePlano
                    })
                }
            }
        }

        res.json({ success: true })
    }
}

export default AssinaturaController