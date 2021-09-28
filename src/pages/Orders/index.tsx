import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Feather';

import formatValue from '../../utils/formatValue';

import getRealm from '../../services/realm';

import {
  Container,
  Header,
  HeaderTitle,
  OrderContainer,
  OrderList,
  OrderTouchableOpacity ,
  OrderContent,
  OrderTitle,
  OrderUsuario,
  OrderPricing,
  OrderTitleText,
  OrderUsuarioText,
  OrderPricingText,
  OrderIcon
} from './styles';

export interface Order {
  id: string;
  id_user: number;
  name_user: string;
  total: number;
  dateCreated: Date;
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState([]);
 
  const navigation = useNavigation();
  
  async function handleNavigate(id: string): Promise<void> {
    navigation.navigate('CartsBuyes', {
      id,
    });
  }

  useEffect(() => {
    async function loadOrders() {
      const realm = await getRealm();
      const orders = realm.objects("Order").sorted('dateCreated', true);

      setOrders(orders);
    }

    loadOrders();
  }, [orders]);

  return (
    <Container>
      <Header>
        <HeaderTitle>Meus pedidos</HeaderTitle>
      </Header>  
      <OrderContainer>
        <OrderList
          data={orders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <OrderTouchableOpacity  
              key={item.id} 
              activeOpacity={0.6}
              onPress={() => handleNavigate(item.id)}
            >
              <OrderContent>
                <OrderUsuarioText>Usuário:</OrderUsuarioText>
                <OrderUsuario>{item.name_user}</OrderUsuario>
                <OrderTitleText>Número pedido:</OrderTitleText>
                <OrderTitle>{item.id}</OrderTitle>
                <OrderPricingText>Valor total pedido:</OrderPricingText>
                <OrderPricing>{formatValue(item.total)}</OrderPricing>
              </OrderContent>
              <OrderIcon>
                <Icon name='chevron-right' size={20} color='#181a1d'/> 
              </OrderIcon>         
            </OrderTouchableOpacity >
          )}
        />
      </OrderContainer>
    </Container>
  );
};

export default Orders;
