module.exports = (receiptID) => {
  return new Promise((resolve, reject) => {

      const max = 1000
      const min = 100
      const timeout = Math.floor(Math.random() * (max - min + 1)) + min

      if (receiptID > 950) {
        reject(`ERROR SAVING RECEIPT: ${receiptID}`)
      }

      setTimeout(() => {
        resolve(`Purchase complete receipt SAVED: ${receiptID}`)
      }, timeout)
    }
  )
}
