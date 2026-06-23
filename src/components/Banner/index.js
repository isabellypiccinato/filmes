
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';

export default function Banner (){
    return(
        <>
<Text style = {styles.textBanner}> Em cartaz </Text>

<Image
source={require("../../../assets/MV5BYjliOTRhMTgtZTFiOS00OTNhLTk1NWQtYTc5MTg1NzkyM2YxXkEyXkFqcGc@._V1_QL75_UX500_CR0,13,500,281_.jpg")}
style ={styles.imageBanner}

/>
</>
  );
}
