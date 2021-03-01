import React, { Component } from 'react';
import { StyleSheet, Text, View,ImageBackground,Image,LayoutAnimation} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures'
import { Actions } from 'react-native-router-flux';

class Swipepage extends Component{
  static navigationOptions={
    header:null
  };

    alertItemName = () => { Actions.signin()}

    componentDidMount(){
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(()=>{
             Actions.signin()
        }, 3000);
   }

   componentWillUnmount(){
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
   }

    render(){
        return(
        <GestureRecognizer 
            onSwipeUp={() => this.alertItemName()}>
           
           <ImageBackground
             source={require('./assets/images/imagetwo.jpg')}
             style={{width:'100%'},{height:'100%'}}>
                <View style = {styles.container}>
                   <Text style={styles.titles}>Title</Text>
                   <Text style={styles.descriptions}>some description.</Text>
                   <Text style={styles.descriptions}>some more descriptions...</Text>
                   <Image
                      source={require('./assets/images/upwardarrow.png')}
                      style={styles.bottom}/> 
                 </View>
            </ImageBackground>    
        </GestureRecognizer>
         
       
        );
    }
}
export default Swipepage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titles:{
      color:'#fff',
      fontSize:44,
    },
    descriptions:{
      color:'#fff',
      fontSize:14,
    },
    bottom: {
      justifyContent: 'flex-start', 
      alignItems:'center',
      position: 'absolute',
      bottom: 0
    },
  });
  