
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
        ></TextInput>

        </View>
       
        {/* inicio do banner */}

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
    padding:8,
  }

  
});
