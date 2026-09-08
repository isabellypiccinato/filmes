import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

export default function CardMovies ({nome, nota, imagem}){
    return(
        <TouchableOpacity style={styles.containerFilme}>
            <Image style={styles.imageFilme} source={{uri: imagem}}></Image>
            <Text style={styles.textoFilme}> {nome} </Text>
        </TouchableOpacity>
    );
}