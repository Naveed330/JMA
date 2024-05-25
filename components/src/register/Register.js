import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Pressable,ScrollView } from 'react-native';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  return (
      <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.loginImageContainer}>
                <Image style={styles.image} source={require('../../../assets/images/registerbg.png')} />
                <Pressable style={styles.backbuttonContainer}>
                    <Image source={require('../../../assets/images/backbutton.png')} />
                </Pressable>
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Register</Text>
                    <Text style={styles.welcomeLoginText}>Create your new account</Text>
                </View>
                <View style={styles.formContainer}>
                <TextInput 
                style={styles.textInput} 
                placeholder='Name' 
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
                name='name'
                autoCapitalize='none'
                />
                <TextInput 
                style={styles.textInput} 
                placeholder='Email' 
                name='email'
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                secureTextEntry 
                autoCapitalize='none'
                />
                <TextInput 
                style={styles.textInput} 
                placeholder='Phone' 
                name='phone'
                value={phone} 
                onChange={(e)=>setPhone(e.target.value)} 
                secureTextEntry 
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
               <Text style={styles.text}>
                    By signing up you agree to our{' '}
                    <Pressable onPress={() => { /* Handle Terms & Conditions press */ }}>
                    <Text style={styles.link}>Terms & Conditions</Text>
                    </Pressable>
                    {' '}and{' '}
                    <Pressable onPress={() => { /* Handle Privacy Policy press */ }}>
                    <Text style={styles.link}>Privacy Policy</Text>
                    </Pressable>
                </Text>

                <Pressable style={styles.loginBtn} >
                    <Text style={styles.loginText} >Sign Up</Text>
                </Pressable>

                <View style={styles.joveraRegister}>
                    <Text style={styles.newJovera} >Already have an Account? 
                    <Pressable>
                        <Text style={styles.registerBtn}> Login in</Text>
                    </Pressable>
                    </Text>
                </View>
            </View>
            </View>
          </ScrollView>
    </View>
  );
}
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flexGrow: 1,
  },
  loginImageContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.5, // 50% of the screen height
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  textContainer: {
    position: 'absolute',
    top: '40%', 
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  backbuttonContainer:{
    position: 'absolute',
    top: '10%', 
    left: '5%',
    right: 0,
    alignItems: 'start',
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
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  forgotPassword:{
    color:'#000000',
    fontSize:14,
    fontWeight:'500'
  },
  forgotContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  loginBtn:{
    backgroundColor:'#F3C147',
    width:'100%',
    height:42,
    borderRadius:46,
    marginTop:20
  },
  loginText:{
    color:'#000',
    fontWeight:'500',
    fontSize: 26,
    textAlign:'center'
  },
  joveraRegister: {
    marginTop:20,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom:30
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
  text: {
    fontSize: 16, 
    color: '#000', 
    textAlign: 'center', 
    marginTop:15
  },
  link: {
    color: '#D5A847',
    textDecorationLine: 'none', 
  },
});

          


