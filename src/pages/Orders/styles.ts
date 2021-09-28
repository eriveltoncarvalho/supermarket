import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Order} from './index';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 60px 24px 60px;
  background: #1B162D;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
`;

export const OrderContainer = styled.View`
  flex: 1;
  margin-top: -60px;
`;

export const OrderList = styled(FlatList as new () => FlatList<Order>)`
  flex: 1;
  padding: 0 20px;
  margin-top: 16px;
`;

export const OrderTouchableOpacity = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f0f0f5;
  border-radius: 8px;
  margin-bottom: 16px;
  border-bottom-width: 6px;
  border-bottom-color: #acb0b4; 
`;

export const OrderContent = styled.View`
  flex: 1;
  padding: 16px;
`;
export const OrderTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  color: #3d3d4d;
  margin-bottom: 5px;
`;
export const OrderUsuario = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  color: #3d3d4d;
  margin-bottom: 5px;
`;

export const OrderPricing = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #39b100;
  margin-top: 2px;
`;

export const OrderTitleText = styled.Text`
 font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  color: #1d1c1c;
`;

export const OrderUsuarioText = styled.Text`
 font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  color: #1d1c1c;
`;

export const OrderPricingText = styled.Text`
 font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  color: #1d1c1c;
`;

export const OrderIcon = styled.View`
  margin-left: auto;
`;

