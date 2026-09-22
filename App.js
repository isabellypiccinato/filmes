
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header  from './src/components/Header';
import Search from './src/components/Search'
import Banner from './src/components/Banner';
import { FlatList } from 'react-native-web';
import DATA from './movies.js'
import CardMovies from './src/components/CardMovies';
import Rotas from './src/Rotas'

export default function App() {
  return (
    <Rotas></Rotas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(125, 188, 252)',
    alignItems: 'center',
    
  },
  

  
});

//nome:isabelly carvalho Piccinato