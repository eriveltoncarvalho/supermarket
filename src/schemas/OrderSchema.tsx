export default class OrderSchema {
    static schema = {
      name: 'Order',
      primaryKey: 'id',
      properties: {
        id: 'string',
        id_user: 'int',
        name_user: 'string', 
        total: 'float',
        dateCreated: "date"
      },
    };
  }

  

