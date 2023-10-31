import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles as globalStyles} from '../theme/appTheme';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export const TextScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const handleChange = (value: string, field: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.globalMargin}>
            <HeaderTitle title="Text inputs" />
            <TextInput
              style={styles.inputStyle}
              value={form.name}
              placeholder="Your name"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => handleChange(value, 'name')}
            />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={styles.inputStyle}
              placeholder="Your email"
              value={form.email}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => handleChange(value, 'email')}
              keyboardAppearance="dark"
            />

            <TextInput
              style={styles.inputStyle}
              placeholder="Your phone"
              value={form.phone}
              keyboardType="phone-pad"
              onChangeText={value => handleChange(value, 'phone')}
            />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
