
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header  from './src/components/Header';
import Search from './src/components/Search'
import Banner from './src/components/Banner';
import { FlatList } from 'react-native-web';
import DATA from './movies.js'
import CardMovies from './src/components/CardMovies';

export default function App() {
  return (
    <View style={styles.container}>

        {/* inicio da header */}

        <Header></Header>


        {/* inicio da barra pesquisa */}

        <Search></Search>
       
        {/* inicio do banner */}

        <Banner></Banner>

        <View style = {{width: '90%'}}>
          <FlatList 
          horizontal= {true}
          data={DATA}
          keyExtractor={(item)=> item.id}
          renderItem={({item}) => (
            <CardMovies
            nome={item.nome}
            imagem={item.imagem}
            nota={item.nota}
            />
          )}
          />
        </View>
        </View>
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