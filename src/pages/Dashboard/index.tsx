import React, { useEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo-header.png';
import SearchInput from '../../components/SearchInput';
 
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import {
  Container,
  Header,
  FilterContainer,
  Title,
  CategoryContainer,
  CategorySlider,
  CategoryItem,
  CategoryItemTitle,
  ProductsContainer,
  ProductsList,
  Product,
  ProductImageContainer,
  ProductContent,
  ProductTitle,
  ProductDescription,
  ProductPricing,
  ProductCartIcon,
  ProductContentIcon,
  ProductLogoutIcon
} from './styles';

interface Product {
  id: number;
  id_category: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  formattedPrice: string;
}

interface Category {
  id: number;
  title: string;
  image_url: string;
}

const Dashboard: React.FC = () => {
  const [Products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    number | undefined
  >();
  const [searchValue, setSearchValue] = useState('');

  const navigation = useNavigation();

  async function handleNavigateCartBuy(): Promise<void> {
    navigation.navigate('CartsBuyes', {
      id: '0',
    });
  }


  async function handleNavigate(id: number): Promise<void> {
    navigation.navigate('ProductsDetails', {
      id,
    });
  }

  useEffect(() => {
    async function loadFoods(): Promise<void> {
      const response = await api.get('/products', {
        params: {
          id_category_like: selectedCategory,
          name_like: searchValue,
        },
      });

      setProducts(
        response.data.map((product: Product) => ({
          ...product,
          formattedPrice: formatValue(product.price),
        })),
      );
    }

    loadFoods();
  }, [selectedCategory, searchValue]);

  useEffect(() => {
    async function loadCategories(): Promise<void> {
      const response = await api.get('/categories');

      setCategories(response.data);
    }

    loadCategories();
  }, []);

  function handleSelectCategory(id: number): void {
    if (selectedCategory === id) {
      setSelectedCategory(undefined);
    } else {
      setSelectedCategory(id);
    }
  }

  async function handleNavigateLogin() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Header>
        <Image source={Logo} />
        <ProductContentIcon>
          <ProductLogoutIcon>
            <Icon
              name="log-out"
              size={24}
              color="#FFB84D"
              onPress={() => handleNavigateLogin()}
            />
          </ProductLogoutIcon>
          <ProductCartIcon>
            <Icon
              name="shopping-cart"
              size={24}
              color="#FFB84D"
              onPress={() => handleNavigateCartBuy()}
            />
          </ProductCartIcon>
        </ProductContentIcon>
      </Header>
      <FilterContainer>
        <SearchInput
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Qual produto você procura?"
        />
      </FilterContainer>
      <ScrollView>
        <CategoryContainer>
          <Title>Categorias</Title>
          <CategorySlider
            contentContainerStyle={{
              paddingHorizontal: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map(category => (
              <CategoryItem
                key={category.id}
                isSelected={category.id === selectedCategory}
                onPress={() => handleSelectCategory(category.id)}
                activeOpacity={0.6}
                testID={`category-${category.id}`}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={{ uri: category.image_url }}
                />
                <CategoryItemTitle>{category.title}</CategoryItemTitle>
              </CategoryItem>
            ))}
          </CategorySlider>
        </CategoryContainer>
        <ProductsContainer>
          <Title>Produtos</Title>
          <ProductsList>
            {Products.map(product => (
              <Product
                key={product.id}
                onPress={() => handleNavigate(product.id)}
                activeOpacity={0.6}
                testID={`product-${product.id}`}
              >
                <ProductImageContainer>
                  <Image
                    style={{ width: 88, height: 88 }}
                    source={{ uri: product.image_url }}
                  />
                </ProductImageContainer>
                <ProductContent>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>
                  <ProductPricing>{product.formattedPrice}</ProductPricing>
                </ProductContent>
              </Product>
            ))}
          </ProductsList>
        </ProductsContainer>
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
