import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from './styles';




export default function Detalhes(){
    const route = useRoute();
    return(
        <View style = {styles.conteinerDetalhes}>
            <Text> ESSA É MINHA TELA DE DETALHES </Text>
                <Text> {route.params.nome} </Text>
                <Text> {route.params.nota} </Text>
                <Image style = {styles.conteinerDetalhes} source={{route.params.nota}}> </Image>
        </View>
    
    )
}
