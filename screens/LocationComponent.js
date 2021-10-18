import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import { getLocations } from './../lib/data/emergency-data';

class Locations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: []
    }
  }

  render() {
    const { locations } = this.state;
    const { active, handleActive } = this.props;
    return(
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal={true}>
          {
            locations && locations.map((item) => (
              <View key={item.id}>
                <TouchableOpacity
                  style={active === item.id ? styles.categoriesActive : styles.categories}
                  onPress={() => handleActive(item.id)}
                >
                  <Text style={active === item.id ? styles.textActive : styles.text}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))
          }
        </ScrollView>
      </View>
    );
  }
  async componentDidMount() {
    const data = await getLocations();
    this.setState({locations: data});
  }
}

const styles = StyleSheet.create({
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 30,
    width: '90%',
    alignSelf: 'center',
  },
  categoriesActive: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#90168C',
    width: 'auto',
    height: 40
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
    width: 'auto',
    height: 40
  },
  textActive: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white'
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#90168C'
  }
});


export default Locations;