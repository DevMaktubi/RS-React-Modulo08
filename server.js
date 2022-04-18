const { randomInt } = require("crypto")

module.exports = () => {
  const data = {
    products: [],
  }

  for (let i = 0; i< 100; i++) {
    data.products.push({
      id: i + 1,
      title: `Camiseta ${i + 1}`,
      price: i + 1 * randomInt(100),
    })
  }

  return data;
}