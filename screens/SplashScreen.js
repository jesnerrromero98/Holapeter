import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  const { colors } = useTheme();

  return(
    <View style={styles.container}>
      <StatusBar backgroundColor='#0D0D0D' barStyle="light-content"/>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <LinearGradient
            colors={['#AB2F74', '#AB2F74']}
            style={styles.btnLogIn}
          >
            <Text style={styles.btnLogInText}>INICIO</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSignIn} onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.btnSignInText}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.27;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  btnLogIn: {
    width: 333,
    height: 57,
    borderRadius: 50,
    marginBottom:30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnLogInText: {
    color: '#fff',
    fontSize: 18
  },
  btnSignIn: {
    width: 333,
    height: 57,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#AB2F74',
    marginBottom:30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnSignInText: {
    color: '#AB2F74',
    fontSize: 18
  }
});

