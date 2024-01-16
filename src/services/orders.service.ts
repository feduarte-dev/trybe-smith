import OrderModel from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

const getAllOrders = async (): Promise<ServiceResponse<Order>> => {
  const orders = await OrderModel.findAll({
    include: [
      { model: ProductModel, as: 'productIds' },
    ],
  });
  
  const productIdsArray = orders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((product) => product.id) })) as unknown as Order;
  
  return { status: 200, data: productIdsArray };
};

export default {
  getAllOrders,
};
