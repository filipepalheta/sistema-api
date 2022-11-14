import { Assinaturas, Assinatura_Registros, Users } from "../models/Models.js"

class AssinaturaController {

    static createAssinatura = async (req, res) => {
        const dadosReq = req.body
        const transactionType = req.body.event

        const plans = {
            1: 'Corte',
            4: 'Barba',
            5: 'Corte & Barba',
            6: 'Teste'
        }

        if (transactionType == 'transaction.status' || transactionType == 'transaction.updateStatus') {

            if ('Subscription' in dadosReq) {

                if (dadosReq.Subscription.status == 'active') {

                    if(dadosReq.Subscription.mainPaymentMethodId == 'creditcard'){
                        const helperCostumer = dadosReq.Subscription.Customer
                        const subId = dadosReq.Subscription.galaxPayId
                        const helperCard = dadosReq.Subscription.PaymentMethodCreditCard.Card
                        const planId = dadosReq.Subscription.planGalaxPayId
                        const myID = dadosReq.Subscription.myId
    
                        const verificar = await Assinatura_Registros.findOne({
                            where: {
                                galaxyPayId: subId
                            }
                        })
    
                        var costumer = {
                            galaxyPayId: helperCostumer.galaxPayId,
                            name: helperCostumer.name,
                            value: dadosReq.Subscription.value,
                            created_at: helperCostumer.createdAt,
                            updated_at: helperCostumer.updatedAt,
                            email: helperCostumer.emails[0],
                            phone: helperCostumer.phones[0],
                            card: {
                                number: helperCard.number,
                                expiresAt: helperCard.expiresAt,
                                brand: helperCard.Brand.name
                            }
                        }
    
                        if (verificar) {
                            await Assinatura_Registros.update({
                                plan_my_id: planId,
                                value: costumer.value,
                                periodicity: dadosReq.Subscription.periodicity,
                                updated_at: costumer.updated_at,
                                name: costumer.name,
                                email: costumer.email,
                                phone: costumer.phone,
                                created_at: costumer.created_at,
                                card_operator: costumer.card.brand,
                                card_number: costumer.card.number,
                                vencimento: dadosReq.Transaction.payday,
                                status: dadosReq.Transaction.statusDescription,
                                tipo: dadosReq.Subscription.mainPaymentMethodId
                            }, {
                                where: {
                                    galaxyPayId: subId,
                                }
                            })
                        } else {
                            await Assinatura_Registros.create({
                                plan_my_id: planId,
                                value: costumer.value,
                                galaxyPayId: subId,
                                periodicity: dadosReq.Subscription.periodicity,
                                updated_at: costumer.updated_at,
                                name: costumer.name,
                                email: costumer.email,
                                phone: costumer.phone,
                                created_at: costumer.created_at,
                                card_operator: costumer.card.brand,
                                card_number: costumer.card.number,
                                vencimento: dadosReq.Transaction.payday,
                                costumer_id: costumer.galaxyPayId,
                                tipo: dadosReq.Subscription.mainPaymentMethodId,
                                status: dadosReq.Transaction.statusDescription,
                                galaxyPay: 'sim'
                            })
    
                        }
                    }else if(dadosReq.Subscription.mainPaymentMethodId == 'boleto'){
                        const helperCostumer = dadosReq.Subscription.Customer
                        const subId = dadosReq.Subscription.galaxPayId
                        const planId = dadosReq.Subscription.planGalaxPayId
                        const myID = dadosReq.Subscription.myId
    
                        const verificar = await Assinatura_Registros.findOne({
                            where: {
                                galaxyPayId: subId
                            }
                        })
    
                        var costumer = {
                            galaxyPayId: helperCostumer.galaxPayId,
                            name: helperCostumer.name,
                            value: dadosReq.Subscription.value,
                            created_at: helperCostumer.createdAt,
                            updated_at: helperCostumer.updatedAt,
                            email: helperCostumer.emails[0],
                            phone: helperCostumer.phones[0]
                        }
    
                        if (verificar) {
                            await Assinatura_Registros.update({
                                plan_my_id: planId,
                                value: costumer.value,
                                periodicity: dadosReq.Subscription.periodicity,
                                updated_at: costumer.updated_at,
                                name: costumer.name,
                                email: costumer.email,
                                phone: costumer.phone,
                                created_at: costumer.created_at,
                                vencimento: dadosReq.Transaction.payday,
                                status: dadosReq.Transaction.statusDescription,
                                tipo: dadosReq.Subscription.mainPaymentMethodId
                            }, {
                                where: {
                                    galaxyPayId: subId,
                                }
                            })
                        } else {
                            await Assinatura_Registros.create({
                                plan_my_id: planId,
                                value: costumer.value,
                                galaxyPayId: subId,
                                periodicity: dadosReq.Subscription.periodicity,
                                updated_at: costumer.updated_at,
                                name: costumer.name,
                                email: costumer.email,
                                phone: costumer.phone,
                                created_at: costumer.created_at,
                                vencimento: dadosReq.Transaction.payday,
                                costumer_id: costumer.galaxyPayId,
                                status: dadosReq.Transaction.statusDescription,
                                tipo: dadosReq.Subscription.mainPaymentMethodId,
                                galaxyPay: 'sim'
                            })
                            
                        }
                    }
                }
            }

        }

        res.json({ success: true })
    }
}

export default AssinaturaController