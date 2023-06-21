import * as React from 'react';

import { StyleSheet, View, WebView, Platform, Text } from 'react-native';

export default function PequenaSereia(){

return (

        <View >

            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://youtu.be/j4fyrqoZddY' }} />

    <Text> A Pequena Sereia </Text>
    <Text>Uma jovem sereia faz um acordo com uma bruxa do mar para trocar sua bela voz por pernas humanas para que possa descobrir o mundo acima da água e impressionar um príncipe.
</Text>

    <Text>Data de lançamento: 23 de maio de 2023</Text>
    <Text>Gênero: Fantasia/Musical </Text>
    <Text>Duração: 2h 15m</Text>
    
        </View>



    );
  }


const styles = StyleSheet.create({

WebViewContainer: {

    marginTop: (Platform.OS == 'android') ? 20 : 0,

  }
  
});

