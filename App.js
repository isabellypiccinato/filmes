
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>

        {/* inicio da header */}

        <View style = {styles.viewHeader}>
        <Feather name="menu" size={24} color="white" />
          <Text style = {styles.textHeader}> TECFILMES </Text>
          <TouchableOpacity>

          </TouchableOpacity>


        </View>


        {/* inicio da barra pesquisa */}

        <View style = {styles.conteinerSearch}>

        <TextInput
        placeholder='Digite o filme que deseja buscar'
        style = {styles.inputSearch}
        ></TextInput>
        <TouchableOpacity>
        <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
        </View>
       
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

  viewHeader: {
    flexDirection: 'row',
    width: "90%",
    alignItems: 'center',
    marginTop:10,
    justifyContent: 'space-between'
  },

  textHeader:{
    fontSize:22,
    color:'white',
    fontWeight:'bold'
  },

  conteinerSearch: {
    marginTop:20,
    width:"90%",
    backgroundColor:'white',
    borderRadius:5,
    padding:4,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },

  inputSearch:{
    height:40,
    padding:8,
    width:'100%'
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