const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    button: {
      
      alignItems: 'center',
      backgroundColor: '#008FCC',
      borderRadius:7,
      padding: 10,
      shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0,
    shadowRadius: 7,
    elevation: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      height: 40,
      marginVertical: 8,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
    },
    forgotPasswordText: {
      textAlign: 'center',
      marginVertical: 8,
      textDecorationLine: 'underline',
    },
    registerText: {
      textAlign: 'center',
      marginVertical: 8,
      textDecorationLine: 'underline',
      color: 'blue',
    },
    loginText: {
      textAlign: 'center',
      marginVertical: 8,
      textDecorationLine: 'underline',
      color: 'blue',
    },
    toggleButtonText: {
      color: "#788eec",
          fontWeight: "bold",
          fontSize: 20,
      textAlign:'right',
      textDecorationLine: 'underline',
  
    },
    createAccountButton: {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 16,
    },
    logo: {
      width: 300, // Ajusta el ancho de la imagen según tus necesidades
     height:200,
      alignSelf: 'center',
      marginTop:25,
      marginBottom: 16,
    },
  });