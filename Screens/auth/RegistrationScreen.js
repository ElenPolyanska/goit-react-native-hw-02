import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const addImg = require('../../Source/add.png');

export const RegistrationScreen = ({ changeScreen }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [eyeText, setEyeText] = useState('Показати');

  useEffect(() => {
    setEyeText(hidePassword ? 'Показати' : 'Приховати');
  }, [eyeText, hidePassword]);

  const handleTogglePassword = (e) => {
    setHidePassword(!hidePassword);
  };

  const handleSaveForm = (values, { resetForm }) => {
    if (
      !values.login ||
      !values.email ||
      !values.password
    ) {
      Alert.alert('Увага', 'Заповніть усі поля');
      return;
    }
    console.log(values);
    resetForm();
  };
  const initialValues = {
    login: '',
    email: '',
    password: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSaveForm}
    >
      {({ handleChange, handleSubmit, values }) => (
        <KeyboardAvoidingView
          style={s.containerRegister}
          behavior={
            Platform.OS === 'ios' ? 'padding' : 'height'
          }
        >
          <View style={s.container}>
            <View style={s.avatar}>
              <TouchableOpacity
                style={s.addBtn}
                activeOpacity={0.5}
              >
                <ImageBackground
                  style={s.addImg}
                  source={addImg}
                />
              </TouchableOpacity>
            </View>
            <Text style={s.title}>Реєстрація</Text>

            <TextInput
              style={s.input}
              placeholder='Логін'
              onChangeText={handleChange('login')}
              value={values.login}
            ></TextInput>
            <TextInput
              style={s.input}
              placeholder='Адреса електронної пошти'
              onChangeText={handleChange('email')}
              value={values.email}
            ></TextInput>
            <TextInput
              style={s.input}
              placeholder='Пароль'
              secureTextEntry={hidePassword}
              onChangeText={handleChange('password')}
              value={values.password}
            ></TextInput>

            <TouchableOpacity
              style={s.passwordShow}
              activeOpacity={0.5}
              onPress={handleTogglePassword}
            >
              <Text style={s.passwordShowText}>
                {eyeText}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.registerBtn}
              activeOpacity={0.5}
              onPress={handleSubmit}
            >
              <Text style={s.registerBtnText}>
                Зареєстуватися
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.loginLink}
              activeOpacity={0.5}
              onPress={() => changeScreen(1)}
            >
              <Text style={s.loginLinkText}>
                Вже є акаунт? Увійти
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  containerRegister: {
    justifyContent: 'flex-end',
  },
  avatar: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  addBtn: {
    marginTop: '65%',
    left: '90%',
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
  addImg: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: '500',
    fontSize: 30,
    marginTop: 32,

    lineHeight: 35,
  },
  input: {
    backgroundColor: '#F6F6F6',
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    position: 'relative',
  },
  passwordShow: {
    top: -34,
    left: 130,
  },
  passwordShowText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  registerBtn: {
    backgroundColor: '#FF6C00',
    height: 50,
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 16,
  },
  registerBtnText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 16,
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 56,
  },
  loginLinkText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
});
