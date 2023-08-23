import React ,{useState}from 'react';
import {View, Text, Modal, StyleSheet,Pressable} from 'react-native';
import CustomButton from '../CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClose, faLocationDot } from '@fortawesome/free-solid-svg-icons';

interface Props {
    onClose:(a:boolean) => void,
    visibility:boolean,
    onAccept:() => void
  [key: string]: any; // Propiedades adicionales
}

const CustomModal = ({visibility,onClose,onAccept,...others}:Props) => {
    //const [selectedValue, setSelectedValue] = useState("java");
    

  return (<>
  <Modal
        animationType="slide"
        transparent={true}
        visible={visibility}
        style={{width:'100%'}}
        onRequestClose={() => {
 
            onClose(!visibility);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <View style={{flexDirection: 'row'}}>
                {/*<View style={{marginHorizontal:5}}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => onClose(!visibility)}>
                        <Text style={styles.textStyle}>Cancelar</Text>
                    </Pressable>
    </View>*/}
            
                <CustomButton label='Cancelar' onPressSubmit={() => onClose(!visibility)} viewStyle={{backgroundColor:'gray'}} touchableStyle={{ marginHorizontal: 10 }} icon={<FontAwesomeIcon icon={faClose} style={{color:'white'}}/>}/>
                <CustomButton label='Aceptar' onPressSubmit={() => {onClose(!visibility);onAccept()}} touchableStyle={{ marginHorizontal: 10 }} icon={<FontAwesomeIcon icon={faLocationDot} style={{color:'white'}} />}/>
            </View>
            
          </View>
        </View>
      </Modal>
  </>);
}
export default CustomModal;
const styles = StyleSheet.create({
    centeredView: {
        
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
        width:'80%',
      margin: 0,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
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