import * as React from 'react';

import { StyleSheet, View, WebView, Platform, Text } from 'react-native';

export default function Wandinha(){

return (

        <View >

            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://youtu.be/xvJL6qQ249A' }} />

    <Text>Wandinha: </Text>
    <Text>Transferida para a Escola Nunca Mais, Wandinha Adams irá descobrir que a vida está muito além de tudo que pensava, ela irá fazer amigos, amores e terá muitos mistérios para desvendar.</Text>
    <Text>Temporadas: 1</Text>
    <Text>Primeiro Episódio: 23 de novembro de 2022</Text>
    <Text>Gênero:  Comédia de terror </Text>
    <Text>Quantidade de episódios: 10</Text>
    
        </View>



    );
  }


const styles = StyleSheet.create({

WebViewContainer: {

    marginTop: (Platform.OS == 'android') ? 20 : 0,

  }
  
});
