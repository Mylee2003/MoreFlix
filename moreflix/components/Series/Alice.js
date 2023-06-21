import * as React from 'react';

import { StyleSheet, View, WebView, Platform, Text } from 'react-native';

export default function Alice(){

return (

        <View >

            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://youtu.be/XCaPoypSH9E' }} />

    <Text>Alice in borderland: </Text>
    <Text>Quando três amigos são tirados de sua vidas diárias e de repente sua cidade, Tokio, se torna uma enorme arena de jogos mortais onde ambos terão que arriscar suas vidas, e até mesmo sua amizade, para sobreviver a cada desafio.</Text>
  <Text>Temporadas: 2 </Text>
  <Text>Quantdade de episódios: 16</Text>

    <Text>Data de lançamento: 10 de dezembro de 2020 (Japão) </Text>
    <Text>Gêneros: Suspense, Drama, Sobrevivência, Ficção científica </Text>
    
    
        </View>



    );
  }


const styles = StyleSheet.create({

WebViewContainer: {

    marginTop: (Platform.OS == 'android') ? 20 : 0,

  }
  
});

