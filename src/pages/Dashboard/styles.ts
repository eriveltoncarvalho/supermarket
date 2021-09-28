import styled, { css } from 'styled-components/native';

interface CategoryItemProps {
  isSelected?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 50px 24px 50px;
  background: #1B162D;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FilterContainer = styled.View`
  padding: 0 24px;
  margin-top: -28px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #3d3d4d;
  padding: 0 20px;
`;

export const CategoryContainer = styled.View`
  margin-top: 5%;
`;

export const CategorySlider = styled.ScrollView`
  margin-top: 5%;
`;

export const CategoryItem = styled.TouchableOpacity<CategoryItemProps>`
  background-color: #f0f0f5;
  border: 2px;
  border-color: #FFB84D;
  min-width: 90px;
  min-height: 90px;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-bottom-width: 6px;
  border-bottom-color: #acb0b4; 
  ${props =>
    props.isSelected &&
    css`
      border-color: #FFB84D;
      border-bottom-color:  #FFB84D;
      background-color: #ffebeb;
    `}
`;

export const CategoryItemTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  color: #6c6c80;
`;

export const ProductsContainer = styled.View`
  margin-top: 5%;
`;

export const ProductsList = styled.View`
  padding: 0 20px;
  margin-top: 16px;
`;

export const Product = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f0f0f5;
  border-radius: 8px;
  margin-bottom: 16px;
  border-bottom-width: 6px;
  border-bottom-color: #acb0b4; 
`;

export const ProductImageContainer = styled.View`
  background: #f0f0f5;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 16px;
  height: 100%;
`;

export const ProductContent = styled.View`
  flex: 1;
  padding: 16px;
`;

export const ProductTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #3d3d4d;
`;
export const ProductDescription = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin-top: 6px;
  color: #3d3d4d;
`;

export const ProductPricing = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin-top: 8px;
  font-weight: 600;
  color: #39b100;
`;

export const ProductContentIcon = styled.View`
  display: flex;
  align-items: center;
  padding-top: 0px;
  margin-top: 0%;

`;

export const ProductCartIcon = styled.View`
  display: flex;
  align-items: center;
`;

export const ProductLogoutIcon = styled.View`
  display: flex;
  align-items: center;
  margin-top: 0%;
  min-height: 40px;
  
  
`;