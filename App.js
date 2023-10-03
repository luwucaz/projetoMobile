import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CartaoPage from './src/pages/CartaoPage';

export default function App() {
  return (
      <View style={styles.todoConteudo}>
        <Text style={styles.textoHeader}>Jogo de RPG beem maneiro!</Text>

        <View style={styles.container}>
          
          <CartaoPage titulo="Machado PipipiPopopo" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies turpis sem, sed semper magna faucibus id. In et quam ligula." imagem="https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Iron_Axe_JE5_BE2.png/revision/latest/scale-to-width/360?cb=20200217234438"></CartaoPage>
          <CartaoPage titulo="Espada PipipiPopopo" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies turpis sem, sed semper magna faucibus id. In et quam ligula." imagem="https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Iron_Axe_JE5_BE2.png/revision/latest/scale-to-width/360?cb=20200217234438"></CartaoPage>
          <CartaoPage titulo="Enxada PipipiPopopo" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies turpis sem, sed semper magna faucibus id. In et quam ligula." imagem="https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Iron_Axe_JE5_BE2.png/revision/latest/scale-to-width/360?cb=20200217234438"></CartaoPage>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: "20px"
  },
  textoHeader: {
    "color":"#000","textAlign":"center","fontFamily":"Arial","fontSize":"27.023px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal", "paddingBottom": "40px"
  },
  todoConteudo:{
    margin:'auto',
    paddingTop: '40px',
  }
});
