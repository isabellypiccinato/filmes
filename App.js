
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header  from './src/components/Header';
import Search from './src/components/Search'
export default function App() {
  return (
    <View style={styles.container}>

        {/* inicio da header */}

        <Header></Header>


        {/* inicio da barra pesquisa */}

        <Search></Search>
       
        {/* inicio do banner */}

        <Text style = {styles.textBanner}> Em cartaz </Text>

        <Image
        source={require("./assets/MV5BYjliOTRhMTgtZTFiOS00OTNhLTk1NWQtYTc5MTg1NzkyM2YxXkEyXkFqcGc@._V1_QL75_UX500_CR0,13,500,281_.jpg")}
        style ={styles.imageBanner}

        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(125, 188, 252)',
    alignItems: 'center',
    
  },
  imageBanner:{
    width:'90%',
    height:200,
    marginTop:15,
    borderRadius:10

  },

  textBanner:{
    color:'white',
    width:'90%',
    fontSize:30,
    marginTop:20,
    fontWeight:'bold'
    
  }

  
});

//nome:isabelly carvalho Piccinato