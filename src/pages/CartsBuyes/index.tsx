import React, {
  useEffect,
  useState,
  useMemo,
} from 'react';
import { Alert, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import formatValue from '../../utils/formatValue';

import getRealm from '../../services/realm';


import {
  Container,
  Header,
  HeaderTitle,
  ProductContainer,
  ProductList,
  Products,
  ProductImageContainer,
  ProductContent,
  ProductDeleteItemTouchableOpacity,
  ProductTitle,
  ProductDescription,
  ProductPricing,
  ProductPricingtext,
  ProductTotalText,
  TotalContainer,
  PriceButtonContainer,
  TotalPrice,
  FinishOrderButton,
  ButtonText,
  IconContainer,
  ContinueButton,
  ContinueText,
  EmptyCartText,
  EmptyCartContainer,
  EmptyCartButton,
  EmptyCartButtonText
} from './styles';

export interface Product {
  id: number;
  id_category: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  quantity: number;
  total: number;
}

interface Params {
  id: string;
}

const CartBuy: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItem, setCartItem] = useState(false);
  const [orderFinished, setOrderFinished] = useState(false);
  
  const route = useRoute();
  const navigation = useNavigation();
  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadItem() {
      const realm = await getRealm();
      let item: Realm.Results<Realm.Object>; 
    
      if (cartItem){
        item = realm.objects("CartItem");  
      } 
       else {
        item = realm.objects("OrderItem").filtered(`id_order = "${routeParams.id}"`); 
      }

      setProducts(item);
    }

    setCartItem(routeParams.id === '0');
    loadItem();   
    setOrderFinished(!cartItem);
  }, [routeParams, cartItem, orderFinished]);

  async function handleFinishOrder(): Promise<void> {
    try {
      const { id } = await saveOrder(cartTotal, 1,'Erivelton');
     
      products.forEach(async function(rating) {
        await saveOrderItem(id, rating)
      })
      
      await deleteCartItemSchema();
      setOrderFinished(true);
      routeParams.id = id;
      setCartItem(false);

      Alert.alert('Compra finalizada','Favor imprimir o comprovante de compra.');

    } catch (error) {
      console.log('Error save schema Order/OderItem'); 
    } 
  }

  async function handleNavigateDashboard(): Promise<void> {    
    navigation.navigate('MainBottom', {
      screen: 'Dashboard', merge: true
    });
  }
 

  async function saveOrder(total: number, id_user: number, name_user: string) {
    const data = {
       id: String(new Date().getTime()),
       id_user, 
       name_user,
       total,
       dateCreated: new Date()
    }  
  
    const realm = await getRealm();
    
    realm.write(() => {
      realm.create("Order", data);
    });

    return data;
  }

  async function saveOrderItem(id_order: string ,item: Product) { 
    const data = {
      id: id_order+'-'+String(item.id), 
      id_order,
      id_product: item.id,
      name: item.name,
      description: item.description,  
      price: item.price,
      image_url: item.image_url,
      quantity: item.quantity,
      total: item.total  
    }
    
    const realm = await getRealm();
    
    realm.write(() => {
      realm.create("OrderItem", data);
    });
    
    return data;
  }

  async function deleteCartItemSchema() {
    const realm = await getRealm();
    const item = realm.objects("CartItem");

    realm.write(() => {
      realm.delete(item);
    });

    if (!products) {
      Alert.alert('teste')
    }
  }

  const cartTotal = useMemo(() => {
    const productTotal = products.reduce((accumulator, product) => {
        return accumulator + product.total;
      }, 0); 

    return productTotal; 
  }, [products]);

  async function deleteCartItem(id: number) {
    const realm = await getRealm();
    const item = realm.objects("CartItem").filtered(`id = ${id}`);

    realm.write(() => {
      realm.delete(item);
    });

    setOrderFinished(true);
  }

  return (
    <Container>
      <Header>
       {orderFinished ? 
        <Icon
          name="arrow-left"
          size={24}
          color="#FFB84D"
          onPress={() => navigation.goBack()}
          /> : null}
        <HeaderTitle>{orderFinished ? 'Pedido finalizado: ' + routeParams.id : 'Carrinho de compras' }</HeaderTitle>
      </Header>
      <ProductContainer>
        <ProductList 
          data={products}
          keyExtractor={item => item.id}
          
          renderItem={({ item: item }) => (
            <Products
              key={item.id}
            >
              <ProductImageContainer>
                <Image
                  style={{ width: 88, height: 88 }}
                  source={{ uri: item.image_url }}
                />
              </ProductImageContainer>
              <ProductContent>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductDescription>{item.description}</ProductDescription>
                <ProductPricingtext>Valor unitário:</ProductPricingtext>
                <ProductPricing>{formatValue(item.price)}</ProductPricing>
                <ProductTotalText>Quantidate:</ProductTotalText>
                <ProductPricing>{item.quantity}</ProductPricing>
                <ProductTotalText>Valor total do item:</ProductTotalText>
                <ProductPricing>{formatValue(item.total)}</ProductPricing>
               
               {orderFinished ? null : 
                 <ProductDeleteItemTouchableOpacity onPress={() => deleteCartItem(item.id)}>
                   <Icon name="trash-2" size={30} color="#FFFFFF" />
                 </ProductDeleteItemTouchableOpacity>
                }

              </ProductContent>
            </Products>     
          )}   
        />
       </ProductContainer>
       
       {products[0] ? 
        <>
            <TotalContainer>
              <ProductTotalText>{!products[0] ? 'Não existe itens no Carrinho' : 'Valor total do pedido:'}</ProductTotalText>
              <PriceButtonContainer>
                <TotalPrice testID="cart-total">{formatValue(cartTotal)}</TotalPrice>
              </PriceButtonContainer>
            
              {orderFinished ? 
                <ContinueButton onPress={() => {}}>
                <ContinueText>Imprimir comprovante</ContinueText>
                <IconContainer>
                  <Icon name="shopping-bag" size={24} color="#39b100" />
                </IconContainer>
                </ContinueButton> :   
                <>
                <FinishOrderButton onPress={() => handleFinishOrder()}>
                    <ButtonText>Finalizar compra</ButtonText>
                    <IconContainer>
                      <Icon name="list" size={24} color="#FFFFFF" />
                    </IconContainer>
                  </FinishOrderButton>
                  <ContinueButton onPress={() => handleNavigateDashboard()}>
                    <ContinueText>Continuar comprando</ContinueText>
                    <IconContainer>
                      <Icon name="shopping-bag" size={24} color="#39b100" />
                    </IconContainer>
                  </ContinueButton>
                </>  
              }
            </TotalContainer>
          </> : 
          <EmptyCartContainer>
              <EmptyCartText>Não existe itens no Carrinho</EmptyCartText>
              <EmptyCartButton onPress={() => handleNavigateDashboard()}>
                <EmptyCartButtonText>Ir para lista de compra</EmptyCartButtonText>
                <IconContainer>
                  <Icon name="shopping-bag" size={24} color="#FFFFFF" />
                </IconContainer>
              </EmptyCartButton> 
           </EmptyCartContainer>
        }

    </Container>
  );
};

export default CartBuy;
