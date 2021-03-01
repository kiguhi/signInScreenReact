import React, { Component } from 'react';
import { StyleSheet, Text, View,ImageBackground,Image,TextInput,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-elements'

class Signup extends Component {
  static navigationOptions={
    header:null
  };

  state = {
    email: '',
    password: '',
    fullname:'',
    confirmpassword:'',
 }
 handleEmail = (text) => {
  this.setState({ email: text })
}
handlePassword = (text) => {
  this.setState({ password: text })
}
handleFullName = (text) => {
  this.setState({ password: text })
}
handleconfirmpassword = (text) => {
  this.setState({ password: text })
}
gotoSignin=()=>{
  Actions.signin()
}
render(){
  return (
      <ImageBackground
        source={require('./assets/images/imagetwo.jpg')}
        style={{width:'100%'},{height:'100%'}}>
          
          <View style={{marginTop:50}}> 
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1},{margin:20}}>
                        <Text style={{justifyContent: 'flex-start',color:'#fff',fontSize:18}}  onPress={this.gotoSignin}>Log in</Text>
                    </View>
                    <View style={{flex:1},{margin:20}}>
                        <Text style={{justifyContent: 'flex-end',color:'#fff',fontSize:18,opacity:0.3}}>Sign UP</Text>
                    </View>
                </View>
            </View>

          <View style = {styles.container}>
          <Card>
           {/*react-native-elements Card*/}
           <View style={styles.SectionStyle}>
              <Image source={require('./assets/images/account.png')} style={styles.ImageStyle} />
                <TextInput
                   placeholder="Full Name"
                   placeholderTextColor = "#000"
                   autoCapitalize = "none"
                   underlineColorAndroid="transparent"
                   onChangeText = {this.handleFullName}
                 />
           </View>

           <View style={styles.SectionStyle}>
              <Image source={require('./assets/images/mail.png')} style={styles.ImageStyle} />
                <TextInput
                   placeholder="Email address"
                   placeholderTextColor = "#000"
                   autoCapitalize = "none"
                   underlineColorAndroid="transparent"
                   onChangeText = {this.handleEmail}
                 />
           </View>
           <View style={styles.SectionStyle}>
              <Image source={require('./assets/images/password.png')} style={styles.ImageStyle} />
                <TextInput
                   placeholder="Password"
                   placeholderTextColor = "#000"
                   autoCapitalize = "none"
                   underlineColorAndroid="transparent"
                   onChangeText = {this.handlePassword}
                 />
           </View>
           <View style={styles.SectionStyle}>
              <Image source={require('./assets/images/password.png')} style={styles.ImageStyle} />
                <TextInput
                   placeholder="Confirm password"
                   placeholderTextColor = "#000"
                   autoCapitalize = "none"
                   underlineColorAndroid="transparent"
                   onChangeText = {this.handleconfirmpassword}
                 />
                 </View>
                 </Card>
                 </View>
                 <Image
              source={require('./assets/images/sidearrow.png')}
              style={styles.bottom}/>
      </ImageBackground>
  );
}
}
export default Signup

const styles = StyleSheet.create({
  container: {
    opacity:0.55,
    justifyContent: 'center',
  },
   SectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5 ,
    margin: 10
},
 
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
text: {
  borderWidth: 1,
  padding: 2,
  borderColor: 'black',
  backgroundColor: 'red'
},
bottom: { 
  alignItems:'center',
  position: 'absolute',
  bottom: 0,
  right:0,
},
});
