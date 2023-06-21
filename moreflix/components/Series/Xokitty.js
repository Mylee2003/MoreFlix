import * as React from 'react';

import { StyleSheet, View, WebView, Platform, Text } from 'react-native';

export default function Xokitty(){

return (

        <View >

            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://youtu.be/vP9C33H6G3E' }} />

    <Text>Xo, Kitty: </Text>
    <Text>Kitty, uma adolescente de 17 anos, está decidida a se mudar para a Coréia para conhecer webnamorado e para descobrir mais sobre o passado de sua mãe, mas o que ela irá descobrir vai muito além de garotos bobos e românces antigos da mãe.
 </Text>
    <Text>Temporadas: 1</Text>
    <Text>Primeiro episódio: 18 de maio de 2023</Text>
    <Text>Gênero: AComédia romântica </Text>
    <Text>Quauntidade de episódios: 10 </Text>
    
        </View>



    );
  }


const styles = StyleSheet.create({

WebViewContainer: {

    marginTop: (Platform.OS == 'android') ? 20 : 0,

  }
  
});