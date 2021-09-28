import styled from 'styled-components/native';
import { FlatList }  from 'react-native';
import { Product } from './index';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 60px 24px 60px;
  background: #1B162D;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  margin-left: 5%;
`;

export const ProductContainer = styled.View`
  flex: 1;
  margin-top: -50px;
`;

export const ProductList = styled(FlatList as new () => FlatList<Product>)`
  padding: 5px 10px 0px 10px;
`;

export const Products = styled.View`
  display: flex;
  background: #f0f0f5;
  border-radius: 8px;
  margin-bottom: 20px; 
  min-height: 20%;
  flex-direction: row;
`;

export const ProductImageContainer = styled.View`
  background:  #f0f0f5;
  overflow: hidden;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  margin-top: 20%;
  align-content: center;
`;

export const ProductContent = styled.View`
  margin-left: 2%;
  max-width: 95%;
  min-width: 95%;
`;

export const ProductTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  color: #1d1c1c;
`;

export const ProductDescription = styled.Text`
  max-width: 85%;
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 20px;
  margin-top: 3%;
  color: #1d1c1c;
`;

export const ProductPricing = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  color: #1d1c1c;
  margin-top: 0%;
  margin-bottom: 2%;
`;

export const ProductPricingtext = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  color: #1d1c1c;
  margin-top: 5%;
`;

export const ProductDeleteItemTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  background: #39b100;
  border-radius: 8px;
  max-width: 75%;
  border: solid #39b100 1px;
  margin-bottom: 10px;
`;

export const ProductTotalText = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  color: #1d1c1c;
`;

export const TotalContainer = styled.View`
  padding: 0 20px;
  margin-top: 2%;
  margin-bottom: 8%;
`;

export const PriceButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalPrice = styled.Text`
 font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #1d1c1c;
`;

export const FinishOrderButton = styled.TouchableOpacity`
  background: #1d1c1c;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  border: solid #39b100 1px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  flex: 1;
  text-align: center;
`;

export const IconContainer = styled.View`
  padding: 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const ContinueButton = styled.TouchableOpacity`
  background:  #FFFFFF;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  border: solid #39b100 2px;
`;

export const ContinueText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #39b100;
  flex: 1;
  text-align: center;
`;

export const EmptyCartText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #39b100;
  flex: 1;
  text-align: center;
  margin-top: 0%;
`;

export const EmptyCartContainer = styled.View`
  flex: 1;
  margin-top: 2%;
  margin-bottom: 8%;
  padding: 10px;
`;

export const EmptyCartButton = styled.TouchableOpacity`
  background: #1d1c1c;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  border: solid #39b100 1px;
`;

export const EmptyCartButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  flex: 1;
  text-align: center;
`;
