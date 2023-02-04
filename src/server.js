const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors())

 const data = {
    products: [],
  }

for (let i = 0; i < 1000; i++) {
  data.products.push({
    id: i + 1,
    price: 80,
    title: `Camiseta ${i + 1}`
  })
}

app.get('/products', (req, res) => {
  const { query } = req;

  if (query?.q !== undefined && query?.q !== '') {
    const titleFilter = query.q.toLowerCase();
    return res.json(data.products.filter(product => product.title.toLowerCase().includes(titleFilter)));
  }
  return res.json(data.products);
})

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
