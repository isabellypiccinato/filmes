import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function CardMovies ({nome, nota, imagem}){

    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.containerFilme} onPress={()=> navigation.navigate('Detalhes', {nome,nota,imagem})}>

            <Image style={styles.imageFilme} source={{uri: imagem}}></Image>
            <Text style={styles.textoFilme}> {nome} </Text>
        </TouchableOpacity>
    );
}