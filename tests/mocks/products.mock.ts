const mockedProductResponse = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4,
};

const mockedProductBody = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4,
};

const mockedProductsArrayResponse = [
  {
    id: 1,
    name: "Excalibur",
    price: "10 peças de ouro",
    orderId: 1,
  },
  {
    id: 2,
    name: "Espada Justiceira",
    price: "20 peças de ouro",
    orderId: 1,
  },
  {
    id: 3,
    name: "Lira de Orfeu",
    price: "1 peça de ouro",
    orderId: 2,
  },
];

const noNameProduct = {
  name: "",
  price: "30 peças de ouro",
  orderId: 4,
};

export default {
  mockedProductResponse,
  mockedProductBody,
  mockedProductsArrayResponse,
  noNameProduct
};
