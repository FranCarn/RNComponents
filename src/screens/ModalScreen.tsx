import React, {useState} from 'react';
import {
  Alert,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {styles as globalStyles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';

export const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={globalStyles.globalMargin}>
      <HeaderTitle title="Modals" />
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <View
            style={{
              backgroundColor: '#FFF',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal Header</Text>

            <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 20}}>
              Modal body
            </Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Close modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Button
        title="Open Modal"
        onPress={() => setModalVisible(!modalVisible)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
