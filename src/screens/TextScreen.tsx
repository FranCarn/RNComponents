import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles as globalStyles} from '../theme/appTheme';

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

      <HeaderTitle title={JSON.stringify(form, null, 3)} />
    </View>
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
