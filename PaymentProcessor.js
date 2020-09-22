module.exports = (amount) => {
  return new Promise((resolve, reject) => {

      const max = 2000
      const min = 100
      const timeout = Math.floor(Math.random() * (max - min + 1)) + min

      if (timeout > 1950) {
        reject(`There is a problem with the payments processor`)
      }

      setTimeout(() => {
        resolve(
          { message: `we charged sucessfully $${amount} USD`, receipt: timeout })
      }, timeout)
    }
  )
}
