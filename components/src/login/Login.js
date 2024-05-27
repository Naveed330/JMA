import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // API Call
  const API_BASE_URL = 'http://mob.lantanapk.com/api/users/login'; // Example base URL

  const LoginHandler = () => {
    props.navigation.navigate('Register')
  }

  const RegisterHandler = () => {
    props.navigation.navigate('Register')
    console.log('Register');
  }
  return (
    <View style={styles.container}>
      <View style={styles.loginImageContainer}>
        <Image style={styles.image} source={require('../../../assets/images/loginbg.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Login</Text>
          <Text style={styles.welcomeLoginText}>Login to your Account</Text>
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
        <TouchableOpacity style={styles.forgotContainer} onPress={()=>props.navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword} >Forgot Password ?</Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={()=>LoginHandler()} >
            <Text style={styles.loginText} >Login</Text>
          </TouchableOpacity>

          <View style={styles.joveraRegister}>
            <Text style={styles.newJovera} >New to JOVERA ? 
            <TouchableOpacity onPress={()=>RegisterHandler()}>
                <Text style={styles.registerBtn}> Register Here</Text>
            </TouchableOpacity>
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
    height: Dimensions.get('window').height * 0.5,
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
    top: '65%', 
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
    marginTop:3,
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
    fontWeight:'400'
  },
  forgotContainer:{
    display:'flex', alignItems:'flex-end'
  },
  loginBtn:{
    backgroundColor:'#F3C147',
    width:'100%',
    height:40,
    borderRadius:12,
    marginTop:15,
    justifyContent:'center',
  },
  loginText:{
    color:'#000',
    fontWeight:'500',
    fontSize: 22,
    textAlign:'center'
  },
  joveraRegister: {
    marginTop:35,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  registerBtn:{
    color:'#D5A847',
    fontWeight:'500',
    fontSize:16,
  },
  newJovera:{
    color:'#000',
    fontSize:16,
    fontWeight:'500',
  },
});
