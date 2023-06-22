import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const LoginScreen = ({ changeScreen }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [eyeText, setEyeText] = useState('Показати');

  useEffect(() => {
    setEyeText(hidePassword ? 'Показати' : 'Приховати');
  }, [eyeText, hidePassword]);

  const handleTogglePassword = (e) => {
    setHidePassword(!hidePassword);
  };

  const handleSaveForm = (values, { resetForm }) => {
    if (!values.email || !values.password) {
      Alert.alert('Увага', 'Заповніть усі поля');
      return;
    }
    console.log(values);
    resetForm();
  };

  const initialValues = {
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
          style={s.containerLogin}
          behavior={
            Platform.OS == 'ios' ? 'padding' : 'height'
          }
        >
          <View style={s.container}>
            <Text style={s.title}>Увійти</Text>
            <TextInput
              style={s.input}
              placeholder='Адреса електронної пошти'
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <TextInput
              style={s.input}
              placeholder='Пароль'
              secureTextEntry={hidePassword}
              onChangeText={handleChange('password')}
              value={values.password}
            />
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
              style={s.loginBtn}
              activeOpacity={0.5}
              onPress={handleSubmit}
            >
              <Text style={s.loginBtnText}>Увійти</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.registerLink}
              activeOpacity={0.5}
              onPress={() => changeScreen(0)}
            >
              <Text style={s.registerLinkText}>
                Немає акаунту? Зареєструватися
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
  containerLogin: {
    justifyContent: 'flex-end',
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
  loginBtn: {
    backgroundColor: '#FF6C00',
    height: 50,
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 16,
  },
  loginBtnText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 16,
  },
  registerLink: {
    marginTop: 16,
    marginBottom: 56,
  },
  registerLinkText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
});
