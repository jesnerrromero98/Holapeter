import React, { Component } from 'react';
import { Image, Linking, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';



export default class ExploreScreen extends Component {



  onPressx = () => {
    this.props.navigation.navigate('Reservar Cita')
  };


  render() {
    return (
      <Container style={styles.fondo}>
        <Content >
          <CardItem style={styles.columna}>
            <Left>
              <Image
                source={require('./../assets/doctor.jpeg')}
                style={styles.imagen}
              />
              <Body>
                <Text style={styles.tit2} >Solieth Arguello</Text>
                <Text style={styles.ti1} >Doctora</Text>
              </Body>
            </Left>
            <Button onPress={this.onPressx} style={styles.But} >
              <Text style={styles.icon}>Reservar</Text>
            </Button>
          </CardItem>

          <CardItem style={styles.columna}>
            <Left >
              <Thumbnail
                source={require('./../assets/ernesto-rizo.jpg')}
                style={styles.imagen}
              />
              <Body>
                <Text style={styles.tit2} >Ernesto Rizo</Text>
                <Text style={styles.ti1} >Abogado en leyes</Text>
              </Body>
            </Left>
            <Button onPress={this.onPressx} style={styles.But} >
              <Text style={styles.icon}>Reservar</Text>
            </Button>
          </CardItem>

          <CardItem style={styles.columna}>
            <Left >
              <Thumbnail
                source={require('./../assets/psicologa.jpg')}
                style={styles.imagen}
              />
              <Body>
                <Text style={styles.tit2} >María Márcen</Text>
                <Text style={styles.ti1} >Psicologa</Text>
              </Body>
            </Left>
            <Button onPress={this.onPressx} style={styles.But} >
              <Text style={styles.icon}>Reservar</Text>
            </Button>
          </CardItem>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2021',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tit2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
  ti1: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center'
  },
  columna: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1D2021',
    height: 150,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    margin: 10
  },
  fondo: {
    backgroundColor: '#0D0D0D',
  },
  imagen: {
    width: 95,
    height: 95,
    resizeMode: 'cover',
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 110,
  },
  icon: {
    height: 73,
    marginTop: 55,
    marginLeft: 3,
    color: "#ffffff",
    fontSize: 12
  },
  ic2: {
    color: "#ffffff",
  },
  But: {
    marginTop: 60,
    marginLeft: 170,
    borderRadius: 15,
    backgroundColor: "#90168C"
  },
  But2: {
    width: 95,
    height: 45,
    margin: -45,
    marginLeft: 200,
    borderRadius: 15,
    backgroundColor: "#90168C"
  },
})
