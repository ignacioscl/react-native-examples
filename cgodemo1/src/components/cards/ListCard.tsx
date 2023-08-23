import React ,{useState}from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colorPink } from '../../../styles/colors';

interface Props {
 
}


const ListCard = ({
    ...others
  }:Props) => {
  
    return (<><TouchableWithoutFeedback
        onPress={() => {
          console.log("pasa")
        }}>
        <View style={styles.mainCardView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.subCardView}>
              <Image
                source={require("../../../assets/img1.jpg")}
                resizeMode="contain"
                style={{
                  borderRadius: 25,
                  height: 50,
                  width: 50,
                }}
              />
            </View>
            <View style={{marginLeft: 12}}>
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.black,
                  fontWeight: 'bold',
                  //fontFamily: Fonts.nunitoBold,
                  textTransform: 'capitalize',
                }}>
                {'itechinsiders'}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: '85%',
                }}>
                <Text
                  style={{
                    color: Colors.gray,
                    fontSize: 12,
                  }}>
                  {'itechinsiders'}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 25,
              backgroundColor: colorPink,
              //borderWidth: 1,
              width: 25,
              marginLeft: -26,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}>
            <Text style={{color: Colors.white}}>
              0
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </>);
  }
export default ListCard;
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainCardView: {
    height: 90,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.history_back,
    borderColor: Colors.color_eeeeee,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});