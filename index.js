const PaymentProcessor = require('./PaymentProcessor')
const ReceiptValidator = require('./ReceiptValidator')
const SaveReceipt = require('./SaveReceipt')

const Payment = PaymentProcessor(100)

Payment.then(response => {

  return ReceiptValidator(response.receipt)

}).then(validationResult => {

  if (validationResult.valid) {

    return SaveReceipt(validationResult.receipt)

  }

}).then(saveResult => {

  console.log(saveResult)

}).catch(e => {

  console.log('FAIL')
  console.log(e)

})

const Pay = async () => {

  try {

    const paymentResult = await PaymentProcessor(100)
    const validationResult = await ReceiptValidator(paymentResult.receipt)
    const saveResult = await SaveReceipt(validationResult.receipt)

    console.log(saveResult)

  } catch (e) {

    console.log(e)

  }

}

Pay()
