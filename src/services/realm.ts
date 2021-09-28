import Realm from 'realm';

import CartItem from '../schemas/CartItemSchema';
import Order from '../schemas/OrderSchema';
import OrderItem from '../schemas/OrderItemSchema';


export default async function getRealm() {
  return Realm.open({
    schema: [CartItem, Order, OrderItem]
  });
}