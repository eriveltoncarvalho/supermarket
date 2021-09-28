import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import TabRoutes from './tab.routes';

import Login from '../pages/Login';
import ProductDetails from '../pages/ProductsDetails';
import CartBuy from '../pages/CartsBuyes';


const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Login">
      <App.Screen
        options={{
          cardStyle: { backgroundColor: '#1B162D' },
          headerShown: false,
          gestureEnabled: false,
        }}
        name="Login"
        component={Login}
      />
      <App.Screen
        name="MainBottom"
        component={TabRoutes}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <App.Screen
        name="ProductsDetails"
        component={ProductDetails}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={24}
              color="#FFB84D"
              onPress={() => navigation.goBack()}
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 24,
          },
          headerRightContainerStyle: {
            marginRight: 24,
          },
          headerTitle: 'Produto',
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Poppins-Regular',
            fontSize: 18
          },
          headerStyle: {
            backgroundColor: '#1B162D',
            elevation: 0,
            borderWidth: 0,
            shadowColor: 'transparent',
          },
        })}
      />

      <App.Screen
        name="CartsBuyes"
        initialParams={{ id: '0' }}
        component={CartBuy}
        options={{ headerShown:false }}
      />

    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
