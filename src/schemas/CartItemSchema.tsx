export default class CartItemSchema {
    static schema = {
      name: 'CartItem',
      primaryKey: 'id',
      properties: {
        id: 'int',
        id_category: 'int',
        name: 'string',
        description: 'string', 
        price: 'float',  
        image_url: 'string',
        quantity: 'int',
        total: 'float',
      },
    };
  }
