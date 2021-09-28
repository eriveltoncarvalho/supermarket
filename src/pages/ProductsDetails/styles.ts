import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 40px 24px 20px;
  background: #1B162D;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 40,
  },
})`
  margin-top: -40px;
`;

export const Product = styled.View`
  display: flex;
  flex-direction: column;
  background: #f0f0f5;
  border-radius: 8px;
  margin-bottom: 10px;
  min-height: 40%;
`;

export const ProductImageContainer = styled.View`
  padding: 5px 0px 5px;
  background: #FFFFFf;
  overflow: hidden;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  align-items: center;
`;

export const ProductContent = styled.View`
  padding: 15px 20px;
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
`;

export const ProductPricingtext = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  color: #1d1c1c;
  margin-top: 5%;
`;

export const TitlePrincing = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  color: #1d1c1c;
`;

export const AdditionalsContainer = styled.View`
  padding: 0 24px;
  margin-top: 16px;
`;

export const AdditionalItem = styled.View`
  background: #f0f0f5;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  margin-top: 8px;
`;

export const AdditionalItemText = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 18px;
  color: #FFFFFF;
  line-height: 22px;
`;

export const AdditionalQuantity = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 105px;
`;

export const TotalContainer = styled.View`
  padding: 0 20px;
  margin-top: 10px;
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

export const QuantityContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 105px;
  background: #39b100;
  border-radius: 8px;
  padding: 10px 15px;
  margin-top: 25px;
`;

export const AddCartButton = styled.TouchableOpacity`
  background: #1d1c1c;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 26px;
  border: solid #39b100 1px;
`;

export const AddCartButtonText = styled.Text`
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  flex: 1;
  text-align: center;
`;

export const AddCartIconContainer = styled.View`
  padding: 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;