import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Pressable } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.loginImageContainer}>
        <Image style={styles.image} source={require('../../../assets/images/loginbg.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Login</Text>
          <Text style={styles.welcomeLoginText}>Login to your account</Text>
        </View>
        <View style={styles.formContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter email or phone' 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          keyboardType='email-address'
          name='email'
          autoCapitalize='none'
        />
        <TextInput 
          style={styles.textInput} 
          placeholder='Password' 
          name='password'
          value={password} 
          onChange={(e)=>setPassword(e.target.value)} 
          secureTextEntry 
          autoCapitalize='none'
        />
        <Pressable style={styles.forgotContainer}>
          <Text style={styles.forgotPassword} >Forgot Password ?</Text>
        </Pressable>

          <Pressable style={styles.loginBtn} >
            <Text style={styles.loginText} >Login</Text>
          </Pressable>

          <View style={styles.joveraRegister}>
            <Text style={styles.newJovera} >New to JOVERA ? 
            <Pressable>
                <Text style={styles.registerBtn}> Register Here</Text>
              </Pressable>
            </Text>
          </View>
      </View>
      </View>
    </View>
  );
}
          


export default Login;

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
  joveraRegister: {
    marginTop:35,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  registerBtn:{
    color:'#D5A847',
    fontWeight:'800',
    fontSize:16,
  },
  newJovera:{
    color:'#000',
    fontSize:16,
    fontWeight:'500',
  },
});
