import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Pressable } from 'react-native';

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.loginImageContainer}>
        <Image style={styles.image} source={require('../../../assets/images/loginbg.png')} />

        <Pressable style={styles.backbuttonContainer}>
            <Image source={require('../../../assets/images/backbutton.png')} />
        </Pressable>

        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>New Password</Text>
          <Text style={styles.welcomeLoginText}>Enter new password</Text>
        </View>

        <View style={styles.formContainer}>
            <TextInput 
            style={styles.textInput} 
            placeholder='Enter New Password' 
            value={newPassword} 
            onChange={(e)=>setNewPassword(e.target.value)} 
            name='newPassword'
            autoCapitalize='none'
            />
        <TextInput 
          style={styles.textInput} 
          placeholder='Confirm password' 
          name='confirmPassword'
          value={confirmPassword} 
          onChange={(e)=>setConfirmPassword(e.target.value)} 
          secureTextEntry 
          autoCapitalize='none'
        />
          <Pressable style={styles.loginBtn} >
            <Text style={styles.loginText} >Submit</Text>
          </Pressable>

      </View>
      </View>
    </View>
  );
}
          


export default NewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loginImageContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.5, // 50% of the screen height
    flexShrink: 0,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    top: '60%', 
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 48,
    fontWeight: '700',
    textAlign: 'center',
  },
  welcomeLoginText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
  textInput:{
    width:'100%',
    height:'55px',
    flexShrink: 0,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  textInput: {
    width: '100%',
    height: 55,
    borderColor: '#8B8B8B',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  forgotPassword:{
    color:'#D5A847',
    fontSize:14,
    fontWeight:'500'
  },
  backbuttonContainer:{
    position: 'absolute',
    top: '10%', 
    left: '5%',
    right: 0,
    alignItems: 'start',
  },
  forgotContainer:{
    display:'flex', alignItems:'flex-end'
  },
  loginBtn:{
    backgroundColor:'#F3C147',
    width:'100%',
    height:42,
    borderRadius:46,
    marginTop:15
  },
  loginText:{
    color:'#000',
    fontWeight:'500',
    fontSize: 26,
    textAlign:'center'
  },
});
