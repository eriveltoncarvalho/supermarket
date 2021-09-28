import React, {
  useEffect,
  useState,
  useMemo,
} from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import formatValue from '../../utils/formatValue';

import api from '../../services/api';
import getRealm from '../../services/realm';

import {
  Container,
  Header,
  ScrollContainer,
  Product,
  ProductImageContainer,
  ProductContent,
  ProductTitle,
  ProductDescription,
  ProductPricing,
  ProductPricingtext,
  TitlePrincing,
  TotalContainer,
  AdditionalItemText,
  PriceButtonContainer,
  TotalPrice,
  QuantityContainer,
  AddCartButton,
  AddCartButtonText,
  AddCartIconContainer,
} from './styles';

interface Params {
  id: number;
}

interface Product {
  id: number;
  id_category: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  formattedPrice: string;
}

const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState({} as Product);

  const [productQuantity, setProductQuantity] = useState(1);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  async function handleNavigateCartBuy(): Promise<void> {
    navigation.navigate('CartsBuyes', {
      id: '0'
    });
  }

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`/products/${routeParams.id}`);
     
      setProduct({
        ...response.data,
        formattedPrice: formatValue(response.data.price),
      });
    }

    loadProduct();
  
  }, [routeParams]);

  function handleIncrementProduct(): void {
    setProductQuantity(productQuantity + 1);
  }

  function handleDecrementProduct(): void {
    if (productQuantity === 1) return;

    setProductQuantity(productQuantity - 1);
  }

  const cartTotal = useMemo(() => {
    const productTotal = product.price;

    return ((productTotal) * productQuantity);
  }, [product, productQuantity]);


  async function saveCartItem(cartItem: Product, quantity: number, total: number) {
    const data = {
      id: cartItem.id,
      id_category: cartItem.id_category,
      name: cartItem.name,
      description: cartItem.description,  
      price: cartItem.price,
      image_url: cartItem.image_url,
      quantity,
      total 
    }
    
    const realm = await getRealm();

    realm.write(() => {
      realm.create('CartItem', data, 'modified');
    });
    
    return data;
  }

  async function handleAddCartItem(cartItem: Product, quantity: number, total: number) {
    try {
      await saveCartItem(cartItem, quantity, total);

      handleNavigateCartBuy(); 
    } catch (error) {
      console.log('Error save schema cartItem'); 
    } 
  }

  return (
    <Container>
      <Header />
      <ScrollContainer>  
          <Product>
            <ProductImageContainer>
              <Image
                style={{ width: 150, height: 150 }}
                source={{ uri: product.image_url}}
              />
            </ProductImageContainer>
            <ProductContent>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPricingtext>Valor unitário:</ProductPricingtext>
              <ProductPricing>{product.formattedPrice}</ProductPricing>
            </ProductContent>
          </Product>
        
        <TotalContainer>
          <TitlePrincing>Valor total do item:</TitlePrincing>
          <PriceButtonContainer>
            <TotalPrice testID="cart-total">{formatValue(cartTotal)}</TotalPrice>
            <QuantityContainer>
              <Icon
                size={18}
                color="#FFFFFF"
                name="minus"
                onPress={handleDecrementProduct}
                testID="decrement-product"
              />
              <AdditionalItemText testID="product-quantity">
                {productQuantity}
              </AdditionalItemText>
              <Icon
                size={18}
                color="#FFFFFF"
                name="plus"
                onPress={handleIncrementProduct}
                testID="increment-food"
              />
            </QuantityContainer>
          </PriceButtonContainer>
          <AddCartButton onPress={() => handleAddCartItem(product, productQuantity, Number(cartTotal))}>
            <AddCartButtonText>Adicionar ao carrinho</AddCartButtonText>
            <AddCartIconContainer>
              <Icon name="shopping-cart" size={24} color="#FFFFFF" />
            </AddCartIconContainer>
          </AddCartButton>
        </TotalContainer>
      </ScrollContainer>
    </Container>
  );
};

export default ProductDetails;
