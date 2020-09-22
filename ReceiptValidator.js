module.exports = (receiptID) => {
  return new Promise((resolve, reject) => {

      const max = 1000
      const min = 100
      const timeout = Math.floor(Math.random() * (max - min + 1)) + min

      if (receiptID > 990) {
        reject(`INVALID RECEIPT ID: ${receiptID}`)
      }

      setTimeout(() => {
        resolve({
          valid: true,
          message: `we validated sucessfully the receipt ID: ${receiptID}`,
          receipt: receiptID
        })
      }, timeout)
    }
  )
}
