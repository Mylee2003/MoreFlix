import * as React from 'react';

import { StyleSheet, View, WebView, Platform, Text } from 'react-native';

export default function EuNunca(){

return (

        <View >

            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://youtu.be/tooWCBhvatI' }} />

    <Text>Eu Nunca:  </Text>
    <Text>Onde Devi, uma adolescente não tão popular, tenta mudar seu status social em sua escola e irá perceber as mudanças que isso pode fazer em sua vida.
 </Text>
  <Text>Temporadas: 4</Text>
    <Text>Estreia: 27 de abril de 2020 (EUA) </Text>
    <Text>Gênero:Drama  </Text>
    <Text>Quantidade de episódios: 40 </Text>
    
        </View>



    );
  }


const styles = StyleSheet.create({

WebViewContainer: {

    marginTop: (Platform.OS == 'android') ? 20 : 0,

  }
  
});









