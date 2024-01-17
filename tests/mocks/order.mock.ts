const mockedOrderResponse = {
  userId: 1,
  productIds: [1, 2],
};

const mockedOrderBody = {
  productIds: [1, 2],
  userId: 1,
};

const orderArrayResponse = [
  {
    id: 1,
    userId: 1,
    productIds: [1, 2],
  },
  {
    id: 2,
    userId: 3,
    productIds: [4, 3],
  },
];

export default {
  mockedOrderBody,
  mockedOrderResponse,
  orderArrayResponse,
};
