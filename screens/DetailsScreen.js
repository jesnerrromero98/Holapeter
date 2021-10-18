import React, { Component } from 'react';
import { Image, Linking, StyleSheet } from 'react-native';
import { Container, Content, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import { getEmergencies } from './../lib/data/emergency-data';
import Location from './LocationComponent';

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
      data: []
    }
  }

  handleActive = (value) => {
    this.setState({active: value});
  }

  filtering = () => {
    const { active } = this.state;
    return (x) => {
      return (x.location.includes(active)) || false;
    }
  }


  render() {
    const { data, active } = this.state;

    return (
      <Container style={styles.fondo}>
        <Location active={active} handleActive={this.handleActive}></Location>
        <Content >
          {
            data && data.filter(this.filtering()).map((item) => {
              return (
                <CardItem key={item.id} style={styles.columna}>
                  <Left >
                    <Image
                      source={{ uri: item.image}}
                      style={styles.imagen}
                    />
                    <Body>
                      <Text style={styles.tit2}>{item.name}</Text>
                    </Body>
                  </Left>
                  <Button onPress={() => Linking.openURL(`tel: ${item.number}`)} style={styles.button} >
                    <Text style={styles.icon}>Llamar</Text>
                  </Button>
                </CardItem>
              );
            })
          }
        </Content>
      </Container>
    );
  }
  async componentDidMount () {
    const emergencies = await getEmergencies();
    this.setState({data: emergencies});
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2021',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#ffffff",
    textAlign: 'center'
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
    marginTop: 1,
    textAlign: 'center'
  },
  columna: {
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
    fontSize: 14
  },
  ic2: {
    color: "#ffffff"
  },
  button: {
    marginTop: 60,
    marginLeft: 170,
    borderRadius: 15,
    backgroundColor: "#90168C"
  }
})
