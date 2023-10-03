import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import { Button } from 'react-native-web'
import styles from './styles'

export default function CartaoPage(props) {
    return (
        <View style={styles.viewCartão}>
            <View style={styles.campoComTexto}>
                <Image source={props.imagem} style={styles.logo}/>
                <Text style={styles.textoHeader}>{props.titulo}</Text>
                <Text style={styles.textoCorrido}>{props.texto}</Text>
            
                <TouchableOpacity style={styles.btn}>
                    <Text>Trocar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}