import React, { useCallback, useMemo, useRef, useState } from 'react'; 
import { 
  Image, 
  View, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  TextInput,
  Alert 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';


import { 
  Container, 
  Title
} from './styles';

interface SignInFormData {
  id: string;
  email: string;
  password: string;
}


const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const [login, setLogin] = useState(false);
  
  const navigation = useNavigation();

  async function signIn(email: string, password: string): Promise<void> {
    const response = await api.get('/users', {
      params: {
        email
      },
    });

    if ((response.data[0] === undefined) || (response.data[0].password !== password)) {
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais.'
      )
    } else {
      setLogin(true);
    }
  }

  const handleSignIn = useCallback(async(data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      });

     await signIn(data.email, data.password);
     
     if (login) {
        navigation.navigate('MainBottom', {
          screen: 'Dashboard'
        });
     }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors)

        return;
      }
    }  
    
  }, [navigation, login] );

  return (
    <>

      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS =='ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={{ flex: 1}}
        >
          <Container>
            <View>
              <Title>Faça seu login</Title>
            </View>
            
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input 
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='email-address'
                name='email' 
                icon='mail' 
                placeholder='E-mail'
                returnKeyType='next'
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus
                }} 
              />
              <Input 
                ref={passwordInputRef}
                name='password' 
                icon='lock' 
                placeholder='Senha'
                secureTextEntry
                returnKeyType='send'
                onSubmitEditing={() => {
                  formRef.current?.submitForm(); 
                }}
              />

              <Button 
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>

          </Container> 
        </ScrollView>
      </KeyboardAvoidingView>
      
    </>
  );
};

export default Login;