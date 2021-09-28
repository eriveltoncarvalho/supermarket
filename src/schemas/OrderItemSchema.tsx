export default class OrderItemSchema {
    static schema = {
      name: 'OrderItem',
      primaryKey: 'id',
      properties: {
        id: 'string',
        id_order: 'string',
        id_product: 'int',
        name: 'string',
        description: 'string', 
        price: 'float',  
        image_url: 'string',
        quantity: 'int',
        total: 'float'   
      },
    };
  }
